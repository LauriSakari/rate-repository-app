import { useQuery } from "@apollo/client";
import { GET_USERINFO } from "../graphql/queries";

const useUser = () => {

  const { data, loading, error } = useQuery(GET_USERINFO)
   
  return { data, loading, error }
};

export default useUser;