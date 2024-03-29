import { View, StyleSheet, Linking } from 'react-native'
import Numbers from './Numbers'
import Language from './Language'
import RepositoryHeader from './RepositoryHeader'
import AddReviewButton from './LargeButton'
import theme from '../theme'


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: theme.colors.white
  }
})

const RepositoryItem = ({ item, showGitHubButton }) => {

  const handleGitHubButton = async () => {
    try {
      await Linking.openURL(item.url)
    } catch (error) {
      console.log('Something went wrong ', error)
    }
  }

  return (
    <View testID='repositoryItem' style={styles.container}>
      <RepositoryHeader
        name={item.fullName}
        description={item.description}
        avatar={item.ownerAvatarUrl}
      />
      <Language language={item.language} />
      <Numbers stars={item.stargazersCount}
        forks={item.forksCount}
        reviews={item.reviewCount}
        rating={item.ratingAverage}/>

      {showGitHubButton ? <AddReviewButton handleButton={handleGitHubButton} text='Open in GitHub'/> : null}
    </View>

  )
}

export default RepositoryItem