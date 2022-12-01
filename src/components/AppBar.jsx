import { View, StyleSheet, Pressable, Alert } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'row',
    paddingTop: 40,
    backgroundColor: theme.colors.appBarBackground,
    paddingBottom: 15,
  },
   tab: {
    color: '#FFFFFF',
    paddingLeft: 10
   }
});

const AppBarTab = ({ text }) => {
  return(
  <Pressable onPress={() => Alert.alert('You pressed the text!')}>
    <Text style={styles.tab} fontWeight='bold' fontSize='subheading' color='textSecondary'>{text}</Text>
  </Pressable>    
  )
}

const AppBar = () => {
  return( 
    <View style={styles.flexContainer}>{/* ... */}
      <AppBarTab text={'Repositories'}/>
    </View>
  )
};

export default AppBar;