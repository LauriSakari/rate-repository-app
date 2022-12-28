import { useMutation } from "@apollo/client"
import { GET_CREDENTIALS } from "../graphql/queries";
import { useNavigate } from "react-router-native";
import { useApolloClient } from "@apollo/client";

import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const navigate = useNavigate();
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(GET_CREDENTIALS);
  

    const signIn = async ({ username, password }) => {
        const result = await mutate({variables: { username, password }});
        const token = await result.data.authenticate.accessToken
        await authStorage.setAccessToken(token)
        navigate('/')
        await apolloClient.resetStore();
        return result
    };
  
    return [signIn, result];

}

export default useSignIn