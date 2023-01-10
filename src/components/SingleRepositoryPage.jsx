
import RepositoryItem from "./RepositoryItem"
import ReviewItem from "./ReviewItem"
import { useParams } from "react-router-native"
import useSingleRepository from "../hooks/useSingleRepository"
import ItemSeparator from "./ItemSeparator"
import useRepositoryReviews from "../hooks/useRepositoryReviews"
import Text from "./Text"
import { FlatList } from "react-native"

const SingleRepositoryPage = () => {
    const { id } = useParams()
    
    const { loading, error, data } = useSingleRepository(id)
    const { reviews } = useRepositoryReviews(id)

    if (loading) {
      return <Text>Loading...</Text>
    }
    if (error) {
        console.log('Something went wrong', error)
    }

    const repository = data.repository

    if (!reviews) {
      return <RepositoryItem item={repository} showGitHubButton={true}/>
    }

    const reviewsList = reviews.edges

 return (
  <FlatList
    data={reviewsList}
    renderItem={({ item }) => <ReviewItem item={item}/>}
    keyExtractor={({ id }) => id}
    ListHeaderComponent={() => 
      <>
        <RepositoryItem item={repository} showGitHubButton={true}/>
        <ItemSeparator/>
      </>
      }
    ItemSeparatorComponent={ItemSeparator}
    />
   )
}

export default SingleRepositoryPage