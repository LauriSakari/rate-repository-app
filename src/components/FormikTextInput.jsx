import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginLeft: 12,
    marginTop: 12,
    marginRight: 12,
    borderWidth: 1,
    borderColor: theme.colors.signInBackground,
    padding: 10,
    borderRadius: 3
  },
  errorText: {
    marginLeft: 12,
    marginTop: 5,
    color: theme.colors.errorColor
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput 
        style={styles.input}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
