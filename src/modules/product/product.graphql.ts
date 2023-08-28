import {gql} from "@apollo/client";

export const PRODUCTS = gql`
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
`
export const PORTION_TYPES = gql`
query PortionTypes {
  portionTypes {
    edges {
      node {
        objectId
        name
      }
    }
  }
}`
