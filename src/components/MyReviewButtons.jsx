import { Pressable, View, Alert } from 'react-native'
import Text from './Text'
import { useMutation } from '@apollo/client'
import { DELETE_REVIEW, GET_USERINFO } from '../graphql/queries'
import { useNavigate } from 'react-router-native'
import theme from '../theme'


const MyReviewButtons = ({ reviewId, repositoryId }) => {

  const [deleteReview] = useMutation(DELETE_REVIEW, {
    variables: { deleteReviewId: reviewId },
    refetchQueries: [{ query: GET_USERINFO,
      variables: { includeReviews: true }
    }]
  })

  const navigate = useNavigate()

  const deleteAlert = () => {
    Alert.alert('Delete Review', 'Are you sure you want to delete this review',
      [
        {
          text: 'CANCEL',
          style: 'cancel'
        },
        {
          text: 'DELETE',
          onPress: () => {
            deleteReview({ variables: { deleteReviewId: reviewId } })
          }
        }
      ])
  }

  const handleViewButton = () => {
    navigate(`/repositories/${repositoryId}`)
  }

  const handleDeleteButton = () => {
    deleteAlert()
  }

  return (

    <View style={theme.reviewButtonsContainer}>
      <Pressable onPress={handleViewButton}>
        <Text style={theme.viewButton}>View repository</Text>
      </Pressable>
      <Pressable onPress={handleDeleteButton}>
        <Text style={theme.deleteButton}>Delete repository</Text>
      </Pressable>
    </View>

  )
}

export default MyReviewButtons