import { View, StyleSheet } from "react-native"
import { Formik, } from 'formik';
import FormikTextInput from "./FormikTextInput";
import * as yup from 'yup';
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/queries";
import useSignIn from "../hooks/useSignIn";
import LargeButton from "./LargeButton";

const SignUpForm = () => {

    const initialValues = {
        username: '',
        password: '',
        confirmPassword: ''
    }

    const styles = StyleSheet.create({
        inputFieldsContainer: {
          backgroundColor: 'white',
          paddingBottom: 15
        }
    })

    const validationSchema = yup.object().shape({
        username: yup.string()
          .required('username is required').max(30),
        password: yup.string()
          .required('password is required').min(5).max(50),
        confirmPassword: yup.string().required().oneOf([yup.ref('password')], 'This field must match the password field')
      })

      const [createUser] = useMutation(CREATE_USER)
      const [signIn] = useSignIn()

      const handleSubmit = async ({username, password}) => {
        console.log(username, password)
        try {
          console.log('creating user')
          const { data } = await createUser({ variables: {user: {username, password }}})
          console.log(data)
          if (data) {
            const { data } = await signIn({ username, password });
            console.log(data)
          }
        } catch (error) {
          console.log('Something went wrong ', error)
        }
      }

    return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ handleSubmit }) => <View style={styles.inputFieldsContainer}>
        <FormikTextInput name="username" placeholder="username"/>
        <FormikTextInput name="password" placeholder="Password" secureTextEntry={true}/>
        <FormikTextInput name="confirmPassword" placeholder="Confirm password" secureTextEntry={true}/>
        <LargeButton handleButton={handleSubmit} text='Sign up'/>
      </View>
      }
    </Formik>
    )
}
export default SignUpForm