
import RepositoryItem from "./RepositoryItem"
import { useParams } from "react-router-native"
import useSingleRepository from "../hooks/useSingleRepository"
import Text from "./Text"

const SingleRepositoryPage = () => {
    const { id } = useParams()
    console.log(id)
    
    const { loading, error, data } = useSingleRepository(id)

    console.log(loading, error, data)

    if (loading) {
      return <Text>Loading...</Text>
    }
    if (error) {
        console.log('Something went wrong', error)
    }

    const item = data.repository

 return <RepositoryItem item={item} showGitHubButton={true}/>
}

export default SingleRepositoryPage