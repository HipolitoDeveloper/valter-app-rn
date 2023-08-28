import * as Types from '../../schema';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ProductsQueryVariables = Types.Exact<{
  order?: Types.InputMaybe<Array<Types.ProductOrder> | Types.ProductOrder>;
  skip?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  where?: Types.InputMaybe<Types.ProductWhereInput>;
}>;


export type ProductsQuery = { __typename?: 'Query', products: { __typename?: 'ProductConnection', count: number, edges?: Array<{ __typename?: 'ProductEdge', cursor: string, node?: { __typename?: 'Product', name: string, objectId: string, portion_type: string, portion: number, manufacturer_id: { __typename?: 'Manufacturer', name: string } } | null } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } };

export type PortionTypesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type PortionTypesQuery = { __typename?: 'Query', portionTypes: { __typename?: 'PortionTypeConnection', edges?: Array<{ __typename?: 'PortionTypeEdge', node?: { __typename?: 'PortionType', objectId: string, name: string } | null } | null> | null } };


export const ProductsDocument = gql`
    query Products($order: [ProductOrder!], $skip: Int, $after: String, $where: ProductWhereInput) {
  products(order: $order, skip: $skip, after: $after, where: $where) {
    edges {
      node {
        name
        objectId
        manufacturer_id {
          name
        }
        portion_type
        portion
      }
      cursor
    }
    count
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      order: // value for 'order'
 *      skip: // value for 'skip'
 *      after: // value for 'after'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const PortionTypesDocument = gql`
    query PortionTypes {
  portionTypes {
    edges {
      node {
        objectId
        name
      }
    }
  }
}
    `;

/**
 * __usePortionTypesQuery__
 *
 * To run a query within a React component, call `usePortionTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePortionTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePortionTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function usePortionTypesQuery(baseOptions?: Apollo.QueryHookOptions<PortionTypesQuery, PortionTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PortionTypesQuery, PortionTypesQueryVariables>(PortionTypesDocument, options);
      }
export function usePortionTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PortionTypesQuery, PortionTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PortionTypesQuery, PortionTypesQueryVariables>(PortionTypesDocument, options);
        }
export type PortionTypesQueryHookResult = ReturnType<typeof usePortionTypesQuery>;
export type PortionTypesLazyQueryHookResult = ReturnType<typeof usePortionTypesLazyQuery>;
export type PortionTypesQueryResult = Apollo.QueryResult<PortionTypesQuery, PortionTypesQueryVariables>;