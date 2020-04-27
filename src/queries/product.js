import gql from "graphql-tag";

const PRODUCT_QUERY = gql`
  query Product($id: ID!) {
    product(id: $id) {
      id
      Name
      Description
      Details
      Category {
        id
        Name
      }
      QuantityAvailable
      Pictures {
        url
        previewUrl
      }
      createdAt
    }
  }
`;

export default PRODUCT_QUERY;
