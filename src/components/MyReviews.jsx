import { FlatList } from 'react-native'
import useUser from '../hooks/useUser'
import ReviewItem from './ReviewItem'
import ItemSeparator from './ItemSeparator'

const MyReviews = () => {

  const { data } = useUser({ includeReviews: true })

  const usersReviews = data
    ? data.me.reviews.edges.map((edge) => edge)
    : []

  const newUsersReviews = usersReviews.map((element) => {
    let item = { node: {
      id: element.node.id,
      repositoryId: element.node.repository.id,
      createdAt: element.node.createdAt,
      text: element.node.text,
      rating: element.node.rating,
      user: { username: element.node.repository.fullName }
    } }
    return item
  })


  return (

    <FlatList
      data={newUsersReviews}
      renderItem={({ item }) => <ReviewItem item={item} showButtons={true}/>}
      ItemSeparatorComponent={ItemSeparator}
    />


  )
}
export default MyReviews