import { View, StyleSheet, Pressable } from 'react-native';
import theme from '../theme';
import Text from './Text';

const gitHubStyles = StyleSheet.create({
    gitHubContainer: {
        flexDirection: 'row',
      },
      gitHubButton: {
        flex: 1,
        backgroundColor: theme.colors.primary,
        fontWeight: theme.fontWeights.bold,
        color: '#FFFFFF',
        borderRadius: 5,
        padding:15,
        margin: 15,
        textAlign:'center'
      },
      
})

const GitHubButton = ({ handleGitHubButton }) => {

    

    return(
        <Pressable onPress={() => handleGitHubButton()}>
        <View style={gitHubStyles.gitHubContainer}>
          <Text style={gitHubStyles.gitHubButton}>Open in GitHub</Text>
        </View>
        </Pressable>
        ) 
}

export default GitHubButton