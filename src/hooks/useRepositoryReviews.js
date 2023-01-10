import { useQuery } from "@apollo/client"
import { GET_REPOSITORY_REVIEWS } from "../graphql/queries"

const useRepositoryReviews = (id) => {
  const { loading, error, data } = useQuery(GET_REPOSITORY_REVIEWS, {
    variables: { idToSearch: id },
    fetchPolicy: 'cache-and-network',
  })

  if (loading) {
    console.log('loading reviews...')
  }
  if (error) {
    console.log('Something went wrong ', error)
  }
  if (!data) {
    return []
  }

  const reviews = data.repository.reviews

  return { reviews }
  
}

export default useRepositoryReviews