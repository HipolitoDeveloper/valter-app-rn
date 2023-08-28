import {useLayout} from "./useLayout";
import {ApolloError, FetchResult} from "@apollo/client";
import {TQueryConnection} from "../type/graphql.type";

interface IUseGenericMutationProps<T> {
    onCompleteCallback?: (data: T) => void
    onErrorCallback?: () => void
}

interface IUseGenericNodeQueryProps<T> {
    onErrorCallback?: () => void
}

const useGenericMutation = ({
                                onCompleteCallback,
                                onErrorCallback
                            }: IUseGenericMutationProps<any>) => {
    const {handleError, handleLoading} = useLayout()

    const genericBaseOptions = {
        onCompleted: (data: any) => {
            onCompleteCallback && onCompleteCallback(data)
            handleLoading(false)
        },
        onError: (error: ApolloError) => {
            handleError({
                isOpen: true,
                error: error
            })
            onErrorCallback && onErrorCallback()
            handleLoading(false)
        }
    }

    const extractMutationResponseData = <T>(mutationResponse: FetchResult): T | undefined => {

        if (mutationResponse.data) {
            return mutationResponse.data[Object.keys(mutationResponse.data)[0]].viewer
        }

        return undefined

    }

    return {
        genericBaseOptions,
        extractMutationResponseData
    }

}

const useGenericNodeQuery = ({
                                onErrorCallback
                            }: IUseGenericNodeQueryProps<any>) => {
    const {handleError, handleLoading} = useLayout()

    const genericBaseOptions = {
        onCompleted: (data: any) => {
            handleLoading(false)
        },
        onError: (error: ApolloError) => {
            handleError({
                isOpen: true,
                error: error
            })
            onErrorCallback && onErrorCallback()
            handleLoading(false)
        }
    }

    const extractNodeQueryResponseData = <T>(nodeQueryResponse: any): TQueryConnection<T> | undefined => {

        if (nodeQueryResponse.data) {
            const data = nodeQueryResponse.data[Object.keys(nodeQueryResponse.data)[0]]
            return {
                edges: data.edges,
                endCursor: data.pageInfo.endCursor,
                hasNextPage: data.pageInfo.hasNextPage,
                count: data.count
            }
        }

        return undefined

    }

    return {
        genericBaseOptions,
        extractNodeQueryResponseData
    }

}

export {useGenericMutation, useGenericNodeQuery}