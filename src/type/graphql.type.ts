import {ApolloError} from "@apollo/client";

export type TGraphQLError = ApolloError & {

}

export type TQueryConnection<T> = {
    edges: TEdge<T>[],
    count: number,
    endCursor: string,
    hasNextPage: boolean
}

export type TEdge<T> = {
        cursor: string,
        node: TNode<T>
}

export type TNode<T> = T