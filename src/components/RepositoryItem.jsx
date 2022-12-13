import { View, StyleSheet } from 'react-native';
import Numbers from './Numbers';
import Language from './Language'
import RepositoryHeader from './RepositoryHeader';


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#ddd'
  }
})

const RepositoryItem = ( {item} ) => {
  return (
    <View style={styles.container}>
      <RepositoryHeader
        name={item.fullName} 
        description={item.description} 
        avatar={item.ownerAvatarUrl}
      />    
      <Language language={item.language} />
      <Numbers stars={item.stargazersCount} 
        forks={item.forksCount}
        reviews={item.ratingAverage}
        rating={item.reviewCount}/>
    </View>
  )
}

export default RepositoryItem