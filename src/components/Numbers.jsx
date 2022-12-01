import { View, StyleSheet } from 'react-native';
import Text from './Text';

const roundNumbers = (number) => {
    const numberToRound = number / 1000
    const result = numberToRound.toFixed(1)
    return result
  }
  
  const numbersStyles = StyleSheet.create({
    numbersContainer: { 
      flexDirection: 'row',
      paddingTop: 10,
      paddingBottom: 10,
      justifyContent: 'space-evenly'
    },
    numberItem: {
      textAlign: 'center'
    }
  })
  
  const NumberRow = ({ number, unit, description }) => {
      return (
      <View>
        <Text style={numbersStyles.numberItem} fontWeight={'bold'} fontSize={'subheading'}>{number}{unit}</Text>
        <Text style={numbersStyles.numberItem} color={'textSecondary'}>{description}</Text>
      </View>
  )}
  
  const Numbers = ({stars, forks, reviews, rating }) => {
    return(
      <View style={numbersStyles.numbersContainer}>
        <NumberRow number={roundNumbers(stars)} unit={'k'} description={'Stars'}/>
        <NumberRow number={roundNumbers(forks)} unit={'k'} description={'Forks'}/>
        <NumberRow number={reviews} description={'Reviews'}/>
        <NumberRow number={rating} description={'Ratings'}/>
      </View>
  )}

  export default Numbers