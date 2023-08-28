import React from "react";
import {TProduct} from "../../type/product.type";
import {Box, Center, Flex, HStack, Slide, Text} from "native-base";
import Button from "../button/button.component";
import {FontAwesome5} from "@expo/vector-icons";
import {useCentralize} from "../../hooks/useLayout";
import {SwipeListView} from "react-native-swipe-list-view";
import {TEdge} from "../../type/graphql.type";
import {ListRenderItemInfo, TouchableHighlight} from "react-native";
import Input from "../form/input/input.component";
import Select from "../form/select/select.component";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {BaseQueryOptions} from "@apollo/client";
import Loading from "../layout/loading.component";
import Checkbox from "../form/checkbox/checkbox.component";

export const SSearchedItemsForm = z.object({
    item: z.object({
        adquired_portion: z.string(),
        adquired_portion_type: z.string(),
        isSelected: z.boolean()
    }),
})

export type TSSearchedItemsForm = z.infer<typeof SSearchedItemsForm>

interface ISearchSuggestions {
    onLoad(baseOption: BaseQueryOptions): void,

    selectSuggestions(row: TEdge<TProduct>): void

    onClose(): void;

    isOpen: boolean,
    suggestions?: TEdge<TProduct>[],
    input: React.ReactNode,
    loading: boolean
}


const SearchSuggestions: React.FC<ISearchSuggestions> = ({
                                                             onLoad,
                                                             selectSuggestions,
                                                             onClose,
                                                             isOpen,
                                                             suggestions,
                                                             input,
                                                             loading
                                                         }) => {
    const {
        handleSubmit,
        control,
    } = useForm<TSSearchedItemsForm>({
        resolver: zodResolver(SSearchedItemsForm),
    })


    const center = useCentralize(0.1)

    const renderSuggestionItem = ({item}: ListRenderItemInfo<TEdge<TProduct>>) => (
        <Flex pt='10'>
            <TouchableHighlight onLongPress={() => selectSuggestions(item)} underlayColor={'transparent'}>
                <HStack justifyContent='space-between'
                        m='5'
                        bgColor={item.node.isSelected ? 'blue.100': 'grey.100' }
                        borderRadius={10}
                        style={{
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: item.node.isSelected ? 0.6: 0.1,
                            shadowRadius: 3.84,
                            elevation: 1,
                        }}
                >


                    <Box w={'50%'}>
                        <Flex alignItems='flex-end' w='90%'>
                            <Text fontSize='2xl' color={item.node.isSelected ? 'white.100': 'black.100' }>
                                {item.node.name.charAt(0).toUpperCase() + item.node.name.slice(1)}
                            </Text>
                            <Text fontSize='md' color={item.node.isSelected ? 'white.100': 'black.100' }>
                                {item?.node?.portion}{item?.node?.portion_type}
                            </Text>
                            <Flex alignItems='center' w='100%'>
                            </Flex>
                        </Flex>
                    </Box>
                    <HStack w={'50%'} alignItems='center' justifyContent='center'>
                        <Input isForm={true}
                               name='item.adquired_portion'
                               boxStyle={{
                                   w:'50%',
                                   _focus:{
                                   borderColor: item.node.isSelected ? 'white.100': 'black.100'
                               }

                               }}
                               variant='underlined'
                               fontSize={'md'}
                               borderColor={item.node.isSelected ? 'white.100': 'black.100' }
                               placeholder='100, 200, 3.5'
                               color={item.node.isSelected ? 'white.100': 'black.100' }
                               placeholderTextColor={item.node.isSelected ? 'white.100': 'black.100'}
                               control={control}
                        />
                        <Select
                            control={control}
                            name='item.adquired_portion_type'
                            variant='unstyled'
                            minWidth="20"
                            fontSize={'md'}
                            color={item.node.isSelected ? 'white.100': 'black.100' }
                            isForm={true}
                            value={'g'}
                            items={[
                                {label: 'g', value: 'g'}
                            ]}/>
                    </HStack>

                </HStack>
            </TouchableHighlight>

        </Flex>
    )

    return (
        <Center h={'32'}>

            <Slide in={isOpen} placement={'top'}>
                <Loading loading={loading}/>
                <Box
                    w="100%"
                    h='80%'
                    position='absolute'
                    bg="grey.100"
                    borderBottomLeftRadius='100px'
                    borderBottomRightRadius='100px'
                    style={{
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                    }}
                    safeArea
                >
                    <Center mt={'40px'}>
                        {input}
                    </Center>
                    <SwipeListView data={suggestions}
                                   rightOpenValue={-130}
                                   previewRowKey={'0'}
                                   previewOpenValue={-40}
                                   previewOpenDelay={3000}
                                   renderItem={renderSuggestionItem}
                    />
                    <Button backgroundColor='transparent'
                            position='absolute'
                            bottom={5}
                            onPress={onClose}
                            marginLeft={center}

                    >
                        <FontAwesome5 name="window-minimize" size={20} color="white"/>
                    </Button>
                </Box>
            </Slide>
        </Center>
    )

}

export default SearchSuggestions