import { gql } from '@apollo/client';


export const GET_REPOSITORIES = gql`
query ($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String, $first: Int, $after: String){
  repositories (orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, first: $first, after: $after){
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
      pageInfo {
        hasNextPage
        endCursor
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
query getRepositoryReviewsById ($idToSearch: ID!, $reviewsFirst2: Int, $after: String){
  repository(id: $idToSearch) {
    id
    fullName
    reviews(first: $reviewsFirst2, after: $after) {
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
      pageInfo {
        endCursor
        startCursor
        hasNextPage
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

export const CREATE_USER = gql`
mutation Mutation($user: CreateUserInput) {
  createUser(user: $user) {
    id
    username
    reviewCount
  }
}
`