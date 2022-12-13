import { gql } from '@apollo/client';


export const GET_REPOSITORIES = gql`
query {
  repositories {
    edges {
      node {
        fullName
        description
        forksCount
        language
        name
        ownerAvatarUrl
        stargazersCount
        ratingAverage
        reviewCount
      }
    }
  }
}
`;
