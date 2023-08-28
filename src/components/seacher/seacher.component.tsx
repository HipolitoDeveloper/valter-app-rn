import React, {useCallback, useState} from "react";
import Input from "../form/input/input.component";
import SearchSuggestions from "./searchSuggestions.component";
import {useDisclose} from "native-base";
import {useGenericNodeQuery} from "../../hooks/useApollo";
import {TEdge} from "../../type/graphql.type";
import {TProduct} from "../../type/product.type";
import {BaseQueryOptions} from "@apollo/client";
import {debounce} from "lodash"
import {useLayout} from "../../hooks/useLayout";
import Loading from "../layout/loading.component";

interface ISearcher {
    saveItems(): void

    onLoad(baseOption: BaseQueryOptions): any
}

const Searcher: React.FC<ISearcher> = ({
                                           saveItems,
                                           onLoad,
                                       }) => {
    const {isOpen, onClose, onOpen} = useDisclose()
    const {isOpen: loading, onClose: stopLoading, onOpen: startLoading} = useDisclose()

    const {handleLoading} = useLayout()

    const {extractNodeQueryResponseData} = useGenericNodeQuery({})

    const [searchValue, setSearchValue] = useState<string>('')
    const [suggestions, setSuggestions] = useState<TEdge<TProduct>[]>()

    const debouncedOnLoad = useCallback(
        debounce(async (value) => {
            await load(value)
            stopLoading()
        }, 2000),
        [onLoad]
    );
    const onAfterClose = () => {
        saveItems()
        onClose()
        setSearchValue('')
    }

    const load = async (value: string) => {
        const responseData = await onLoad({
            variables: {
                where: {
                    name: {
                        matchesRegex: value
                    }
                }
            }
        })

        const data = extractNodeQueryResponseData<TProduct>(responseData)
        // setSuggestions(data?.edges)
        setSuggestions([
            {
                "node": {
                    "name": "CHOCOLATE",
                    "objectId": "sv8DcwzQ9M",
                    "manufacturer_id": {
                        "name": "nestle",
                        "__typename": "Manufacturer"
                    },
                    "portion_type": "g",
                    "portion": 100,
                    "__typename": "Product"
                },
                "cursor": "YXJyYXljb25uZWN0aW9uOjA=",
                "__typename": "ProductEdge"
            }
        ])
    }

    const loadSuggestions = async (value: string) => {
        const valueText = value.toUpperCase()
        setSearchValue(value)

        if (!isOpen) {
            await load(valueText)
            onOpen()
        } else {
            startLoading()
            debouncedOnLoad(valueText)

        }
    }

    const selectSuggestions = (row: TEdge<TProduct>) => {

        setSuggestions(oldState => oldState?.map(oldRow => {
                if (oldRow.cursor === row.cursor) {
                    oldRow.node.isSelected = !oldRow.node.isSelected
                }
                return oldRow
            })
        )
    }

    return (
        <>
            <Input isForm={false}
                   name={'search_item'}
                   h={'12'}
                   backgroundColor={'grey.100'}
                   borderRadius='10%'
                   placeholder='Procure o item desejado...'
                   w={'80%'}
                   value={searchValue}
                   onChangeText={loadSuggestions}
                   boxStyle={{
                       shadowColor: "#000",
                       shadowOffset: {
                           width: 0,
                           height: 2,
                       },
                       shadowOpacity: 0.25,
                       shadowRadius: 3.84,
                       elevation: 1,
                   }}
            />

            <SearchSuggestions onLoad={onLoad}
                               isOpen={isOpen}
                               suggestions={suggestions}
                               loading={loading}
                               onClose={onClose}
                               selectSuggestions={selectSuggestions}
                               input={
                                   <Input isForm={false}
                                          name={'search_item'}
                                          h={'12'}
                                          backgroundColor={'grey.100'}
                                          borderRadius='10%'
                                          placeholder='Procure o item desejado...'
                                          w={'80%'}
                                          value={searchValue}
                                          onChangeText={loadSuggestions}
                                       // onEndEditing={}
                                   />
                               }
            />
        </>

    )

}

export default Searcher