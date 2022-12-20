import Text from './Text';
import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';

const styles = StyleSheet.create({

  background: {
    backgroundColor: theme.colors.signInBackground,
    flex: 1
  },
  container: { 
  backgroundColor: 'white'
},
  submit: {
    flexDirection: 'row',
    backgroundColor: theme.colors.primary,
    height: 40,
    margin: 12,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
     
  },
  submitText: {
    color: '#FFFFFF',
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading
  }
})

const initialValues = {
    username: '',
    password: '',
  };

const validationSchema = yup.object().shape({
  username: yup.string()
    .required('username is required'),
  password: yup.string()
    .required('password is required')
})
  
const SignInForm = ({ onSubmit }) => {

    return (
      <>
        <View style={styles.container}>
          <FormikTextInput name="username" placeholder="Username"/>
          <FormikTextInput secureTextEntry={true} name="password" placeholder="Password"/>
          <Pressable style={styles.submit} onPress={onSubmit}>
            <Text style={styles.submitText}>Sign In</Text>
          </Pressable>
        </View>
        <View style={styles.background}> 
        </View>
      </>
      );
};
    
const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;
    console.log('onsubmit', username, password)
    try {
      const { data } = await signIn({ username, password });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
};

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}
          validationSchema={validationSchema}>
          {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit}/>}
        </Formik>
      );
};

export default SignIn;