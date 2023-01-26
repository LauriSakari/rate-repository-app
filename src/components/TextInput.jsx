import { TextInput as NativeTextInput } from 'react-native'
import theme from '../theme'

// const styles = StyleSheet.create({
// });

const TextInput = ({ style, error, ...props }) => {

  const textInputStyle = error ? { ...style, borderColor: theme.colors.errorColor } : style

  return <NativeTextInput style={textInputStyle} {...props} />
}

export default TextInput