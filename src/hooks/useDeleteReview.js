import { useMutation } from '@apollo/client'
import { DELETE_REVIEW, GET_USERINFO } from '../graphql/queries'

const useDeleteReview = (reviewId) => {
  const [deleteReview] = useMutation(DELETE_REVIEW, {
    fetchPolicy: 'cache-and-network',
    variables: { deleteReviewId: reviewId },
    refetchQueries: [{ query: GET_USERINFO }]
  })

  try {
    deleteReview()
  } catch (error) {
    console.log('Something went wrong ', error)
  }
}

export default useDeleteReview