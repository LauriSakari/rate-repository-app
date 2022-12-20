import { gql, useMutation } from "@apollo/client"


const GET_CREDENTIALS = gql`
mutation signIn($username: String!, $password: String!) {
  authenticate(credentials: { username: $username, password: $password }) {
    accessToken
  }
}
`

const useSignIn = () => {
    const [mutate, result] = useMutation(GET_CREDENTIALS);

    const signIn = async ({ username, password }) => {
      // call the mutate function here with the right arguments
        return mutate({variables: { username, password }});
    };
  
    return [signIn, result];

}

export default useSignIn