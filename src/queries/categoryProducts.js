import gql from "graphql-tag";

const CATEGORY_PRODUCTS_QUERY = gql`
  query ProductsInProductCategory($id: ID!) {
    productCategory(id: $id) {
      id
      Name
      Products {
        id
        Name
        Details
        Description
        QuantityAvailable
        Category {
          id
          Name
        }
        Pictures {
          url
          previewUrl
        }
        createdAt
      }
    }
  }
`;

export default CATEGORY_PRODUCTS_QUERY;
