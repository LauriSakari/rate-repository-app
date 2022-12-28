import { View, StyleSheet, ScrollView, } from 'react-native';
import AppBarTab from './AppBarTab';
import theme from '../theme';
import { useNavigate } from 'react-router-native';
import { useApolloClient } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';
import useUser from '../hooks/useUser';
import Text from './Text';

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'row',
    paddingTop: 40,
    backgroundColor: theme.colors.appBarBackground,
    paddingBottom: 15
  }
});



const AppBar = () => {

  const apolloClient = useApolloClient();
  const navigate = useNavigate()
  const authStorage = useAuthStorage();
  const { data, loading } = useUser();

  const logOut = async () => {
    try {
    await authStorage.removeAccessToken()
  } catch (e) {
    console.log(e)
  }
    apolloClient.resetStore();
    navigate('/')
  }

  if (loading) {
    return <Text>Loading...</Text>
  }

  return( 
    <View style={styles.flexContainer}>
      <ScrollView horizontal>
        <AppBarTab text={'Repositories'} link='/'/>
        {data.me ? <AppBarTab text={'Sign out'} link='/' onPress={logOut}/> : 
        <AppBarTab text={'Sign in'} link='/signin'/> }
      </ScrollView>
    </View>
  )
};

export default AppBar;