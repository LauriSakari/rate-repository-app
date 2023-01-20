import { useQuery } from "@apollo/client"
import { GET_REPOSITORY_REVIEWS } from "../graphql/queries"

const useRepositoryReviews = (id) => {
  const { loading, error, data, fetchMore } = useQuery(GET_REPOSITORY_REVIEWS, {
    variables: { idToSearch: id, reviewsFirst2: 6 },
    fetchPolicy: 'cache-and-network',

  })

  if (loading) {
    console.log('loading reviews...')
  }
  if (error) {
    console.log('Something went wrong ', error)
  }
  

  const reviews = data ? data.repository.reviews : undefined

  return { reviews , fetchMore}
  
}

export default useRepositoryReviews