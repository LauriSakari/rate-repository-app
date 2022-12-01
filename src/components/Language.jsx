import { View, StyleSheet } from 'react-native';
import Text from './Text';

const languageStyles = StyleSheet.create({
    languageContainer: {
        flexDirection: 'row',
        marginLeft: 70,
      },
      languageBox: {
        backgroundColor: '#1976d2',
        color: '#FFFFFF',
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