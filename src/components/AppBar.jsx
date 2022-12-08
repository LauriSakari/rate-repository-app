import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'row',
    paddingTop: 40,
    backgroundColor: theme.colors.appBarBackground,
    paddingBottom: 15
  },
   tab: {
    color: '#FFFFFF',
    paddingLeft: 10,
    paddingRight: 10
   }
});

const AppBarTab = ({ text, link }) => {
  return(
    <Link to={link}>
      <Text style={styles.tab} fontWeight='bold' fontSize='subheading' color='textSecondary'>{text}</Text>
    </Link>
  )
}

const AppBar = () => {
  return( 
    <View style={styles.flexContainer}>
      <ScrollView horizontal>
        <AppBarTab text={'Repositories'} link='/'/>
        <AppBarTab text={'Sign in'} link='/signin'/>
      </ScrollView>
    </View>
  )
};

export default AppBar;