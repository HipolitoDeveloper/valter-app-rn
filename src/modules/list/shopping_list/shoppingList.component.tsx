import React from "react";
import {VStack} from "native-base";
import useAuth from "../../../hooks/useAuth";
import {useLayout} from "../../../hooks/useLayout";
import {useNavigation} from "@react-navigation/native";
import {ShoppingListScreenProps} from "../../../type/navigation.type";
import Layout from "../../../components/layout/layout.component";
import Searcher from "../../../components/seacher/seacher.component";
import {useGenericNodeQuery} from "../../../hooks/useApollo";
import {useProductsLazyQuery} from "../../product/product.graphql.generated";
import Checkbox from "../../../components/form/checkbox/checkbox.component";

const ShoppingList: React.FC = () => {

    const {storeUser} = useAuth()
    const {handleLoading} = useLayout()
    const {navigate} = useNavigation<ShoppingListScreenProps<'ShoppingList'>['navigation']>()

    const {genericBaseOptions} = useGenericNodeQuery({})
    const [loadProducts] = useProductsLazyQuery({
        ...genericBaseOptions,
        fetchPolicy: 'no-cache'
    })

    const saveItemsOnList = () => {

    }

    return (
        <Layout>
            <VStack alignItems='center' h='100%'>
                <Searcher saveItems={saveItemsOnList} onLoad={loadProducts}/>
                <Checkbox isForm={false} name={'isSelected'} variant={'search'}/>

            </VStack>
        </Layout>
    )
}

export default ShoppingList