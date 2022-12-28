import { Link } from "react-router-native"
import { StyleSheet } from "react-native-web";
import Text from "./Text"

const styles = StyleSheet.create({
     tab: {
      color: '#FFFFFF',
      paddingLeft: 10,
      paddingRight: 10
     }
  });

const AppBarTab = ({ text, link, onPress }) => {
    return(
      <Link to={link} >
        <Text onPress={onPress} style={styles.tab} fontWeight='bold' fontSize='subheading' color='textSecondary'>{text} </Text>
      </Link>
    )
  }

  export default AppBarTab