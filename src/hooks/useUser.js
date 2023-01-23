import { useQuery } from "@apollo/client";
import { GET_USERINFO } from "../graphql/queries";

const useUser = ( variables ) => {

  const { data, loading, error } = useQuery(GET_USERINFO, {
    variables,
    fetchPolicy: 'cache-and-network'
  })

  console.log('loading', loading)
  console.log('data ', data)
   
  return { data, loading, error }
};

export default useUser;