import { View, Pressable } from 'react-native';
import theme from '../theme';
import Text from './Text';

const LargeButton = ({ handleButton, text }) => {
    return(
        <Pressable onPress={() => handleButton()}>
        <View style={theme.buttonContainer}>
          <Text style={theme.button}>{text}</Text>
        </View>
        </Pressable>
        ) 
}

export default LargeButton