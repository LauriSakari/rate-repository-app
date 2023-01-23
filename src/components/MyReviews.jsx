import { FlatList } from "react-native"
import useUser from "../hooks/useUser"
import ReviewItem from "./ReviewItem"
import ItemSeparator from "./ItemSeparator"

const MyReviews = () => {

    const { data } = useUser({includeReviews: true})

    const usersReviews = data
    ? data.me.reviews.edges.map((edge) => edge)
    : [];

    console.log(usersReviews)

    const newUsersReviews = usersReviews.map((element) => {
        console.log('element ', element)
        let item = { node: {
            createdAt: element.node.createdAt,
            text: element.node.text,
            rating: element.node.rating,
            user: { username: element.node.repository.fullName }
        } }
        return item
    });

   return (  
   <FlatList
   data={newUsersReviews}
   renderItem={({ item }) => <ReviewItem item={item}/>}
   ItemSeparatorComponent={ItemSeparator}
   //onEndReached={handleEndReached}
   />
  )
}
export default MyReviews