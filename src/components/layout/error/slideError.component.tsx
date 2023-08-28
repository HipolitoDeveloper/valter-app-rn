import {Box, Center, Flex, IconButton, ISlideProps, Slide as SlideRN, Text} from "native-base";
import React, {useMemo} from "react";
import {TGraphQLError} from "../../../type/graphql.type";
import {useLayout} from "../../../hooks/useLayout";
import {FontAwesome5} from '@expo/vector-icons';
import Button from "../../button/button.component";
import {GraphQLError} from "graphql/index";

export interface IErrorSlideProps extends ISlideProps {
    isOpen: boolean,
    error?: TGraphQLError
}

const ErrorSlider: React.FC<IErrorSlideProps> = ({
                                                     placement = 'top',
                                                     isOpen,
                                                     error
                                                 }) => {
    const {handleError} = useLayout()

    const renderMessage = (error: GraphQLError) => (
      <Text
            key={error.message}
            m='2'
            color={'white.100'}
            fontSize={'xs'}
            fontWeight='700'
            letterSpacing={1}
        >
            {error.message}
        </Text>
    )

    return (
        <Center h="px">
            <SlideRN in={isOpen} placement={placement}>
                <Box w="100%" position="absolute" bg="red.400"
                     safeArea>
                    <Center width='100%'>
                        <Flex width='80%'>
                            {error?.graphQLErrors.map(error =>
                                renderMessage(error)
                            )}

                        </Flex>
                    </Center>
                    <Button backgroundColor='transparent' h='100%' onPress={() => handleError({
                        isOpen: false,
                    })}>
                        <FontAwesome5 name="window-minimize" size={20} color="white"/>
                    </Button>
                </Box>
            </SlideRN>
        </Center>
    )
}

export default ErrorSlider