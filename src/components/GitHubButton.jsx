import { View, Pressable } from 'react-native';
import theme from '../theme';
import Text from './Text';


const GitHubButton = ({ handleGitHubButton, text }) => {

    return(
        <Pressable onPress={() => handleGitHubButton()}>
        <View style={theme.buttonContainer}>
          <Text style={theme.button}>{text}</Text>
        </View>
        </Pressable>
        ) 
}

export default GitHubButton