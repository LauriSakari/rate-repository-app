import Text from './Text'
import theme from '../theme'
import { View, StyleSheet } from 'react-native'
import { format } from 'date-fns'
import MyReviewButtons from './MyReviewButtons'


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: theme.colors.white,
    flexDirection: 'row',
    flexGrow: 1,
    padding: 10
  },
  rating: {
    width: 45,
    height: 45,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    borderRadius: 45 / 2,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: theme.colors.primary,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold
  },
  ratingContainer: {
    flexGrow: 0,
    paddingRight: 15,
  },
  reviewContainer: {
    flexShrink: 1
  },
  reviewText: {
    paddingTop: 10,
  }
})

const ReviewItem = ({ item, showButtons }) => {

  const date = format(new Date(item.node.createdAt), 'dd.MM.yyyy')

  return (
    <>
      <View style={styles.container}>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{item.node.rating}</Text>
        </View>
        <View style={styles.reviewContainer}>
          <Text fontWeight={'bold'} fontSize={'subheading'}>{item.node.user.username}</Text>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.reviewText}>{item.node.text}</Text>
        </View>
      </View>
      {showButtons ?
        <MyReviewButtons reviewId={item.node.id} repositoryId={item.node.repositoryId}/>
        : null}
    </>
  )
}
export default ReviewItem