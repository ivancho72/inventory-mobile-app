import gql from "graphql-tag";

const CATEGORIES_QUERY = gql`
  query ProductCategories {
    productCategories {
      id
      Name
      Description
      SubCategoryOf {
        Name
      }
    }
  }
`;

export default CATEGORIES_QUERY;
