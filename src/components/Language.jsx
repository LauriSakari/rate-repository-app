import { View, StyleSheet } from 'react-native'
import theme from '../theme'
import Text from './Text'

const languageStyles = StyleSheet.create({
  languageContainer: {
    flexDirection: 'row',
    marginLeft: 70,
  },
  languageBox: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    borderRadius: 5,
    padding:5
  }
})

const Language = ({ language }) => {
  return(
    <View style={languageStyles.languageContainer}>
      <Text style={languageStyles.languageBox}>{language}</Text>
    </View>
  )
}

export default Language