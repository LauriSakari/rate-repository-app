import { View, StyleSheet } from "react-native"
import { Formik, } from 'formik';
import FormikTextInput from "./FormikTextInput";
import * as yup from 'yup';

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
          .required('username is required'),
        password: yup.string()
          .required('password is required')
      })
    


    return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      <View style={styles.inputFieldsContainer}>
        <FormikTextInput name="username" placeholder="username"/>
        <FormikTextInput name="password" placeholder="Password"/>
        <FormikTextInput name="confirmPassword" placeholder="Confirm password"/>
      </View>
    </Formik>
    )
}
export default SignUpForm