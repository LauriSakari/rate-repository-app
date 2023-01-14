import { gql } from '@apollo/client';


export const GET_REPOSITORIES = gql`
query {
  repositories {
    edges {
      node {
        id
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

export const GET_CREDENTIALS = gql`
mutation signIn($username: String!, $password: String!) {
  authenticate(credentials: { username: $username, password: $password }) {
    accessToken
  }
}
`;

export const GET_USERINFO = gql`
query {
  me {
    id
    username
  }
}
`;

export const GET_SINGLE_REPOSITORY = gql`
query getRepositoryById ($idToSearch: ID!){
  repository(id: $idToSearch) {
    id
    fullName
    description
    forksCount
    language
    name
    ownerAvatarUrl
    stargazersCount
    ratingAverage
    reviewCount
    url
  }
  }
`;

export const GET_REPOSITORY_REVIEWS = gql`
query getRepositoryReviewsById ($idToSearch: ID!){
  repository(id: $idToSearch) {
    id
    fullName
    reviews {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
    }
  }
  }
`;

export const CREATE_REVIEW = gql`
mutation Mutation($review: CreateReviewInput) {
  createReview(review: $review) {
    id
    rating
    text
    repository {
      ownerName
    }
  }
}
`