import gql from "graphql-tag";

const PRODUCTS_QUERY = gql`
  query Products {
    products {
      id
      Name
      Description
      Details
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
`;

export default PRODUCTS_QUERY;
