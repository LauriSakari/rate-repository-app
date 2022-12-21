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
      // call the mutate function here with the right arguments
      console.log('signin called')
        const result = await mutate({variables: { username, password }});
        await authStorage.setAccessToken(result.data.authenticate)
        navigate('/')
        apolloClient.resetStore();
        return result
    };
 
    console.log('client ', apolloClient)
    // const setToken = async (token) => {
    //   await authStorage.setAccessToken(token)
    // }

    // console.log(result)
    // if (result.called && !result.loading) {
    //   try {
    //     console.log('tallennetaan token', result.data.authenticate)
    //     const token = result.data.authenticate
    //     setToken(token)
    //   } catch (error) {
    //     console.log(error)
    //   }

    // }

    // eslint-disable-next-line no-undef
    console.log( showAsyncStorageContentInDev())
  
    return [signIn, result];

}

export default useSignIn