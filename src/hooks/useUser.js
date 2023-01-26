import { useQuery } from '@apollo/client'
import { GET_USERINFO } from '../graphql/queries'

const useUser = ( variables ) => {

  const { data, loading, error } = useQuery(GET_USERINFO, {
    variables,
    fetchPolicy: 'cache-and-network'
  })

  return { data, loading, error }
}

export default useUser