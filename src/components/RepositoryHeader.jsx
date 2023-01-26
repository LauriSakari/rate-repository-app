import { View, StyleSheet, Image } from 'react-native'
import Text from './Text'

const repositoryHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
    padding: 10
  },
  avatar: {
    width: 45,
    height: 45,
  },
  avatarContainer: {
    flexGrow: 0,
    paddingRight: 15,
  },
  infoContainer: {
    flexShrink: 1
  },
  infoDescription: {
    paddingTop: 7,

  }
})

const RepositoryHeader = ({ name, description, avatar }) => {
  return (
    <View style={repositoryHeaderStyles.container}>
      <View style={repositoryHeaderStyles.avatarContainer}>
        <Image style={repositoryHeaderStyles.avatar} source={{ uri: avatar }}></Image>
      </View>
      <View style={repositoryHeaderStyles.infoContainer}>
        <Text fontWeight={'bold'} fontSize={'subheading'}>{name}</Text>
        <Text style={repositoryHeaderStyles.infoDescription}>{description}</Text>
      </View>
    </View>
  )
}

export default RepositoryHeader