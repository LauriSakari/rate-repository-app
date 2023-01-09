import { useQuery } from "@apollo/client"
import { GET_SINGLE_REPOSITORY } from "../graphql/queries"

const useSingleRepository = (id) => {
    console.log('use single repository id', id)
  const { loading, error, data } = useQuery(GET_SINGLE_REPOSITORY, {
    variables: { idToSearch: id },
    fetchPolicy: 'cache-and-network',
  })


  return { loading, error, data }

}

export default useSingleRepository