import { FlatList, View, StyleSheet, Pressable} from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, handlePress }) => {

  console.log('handlepress', handlePress)

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => (
        <Pressable onPress={() => handlePress(item)}>
          <RepositoryItem item={item} />
        </Pressable>
      )}
    />
  );
};

const RepositoryList = () => {
  const { repositories } = useRepositories();
  const navigate = useNavigate()

  const handlePress = (item) => {
    console.log('clicked', `/repositories/${item.id}`)
    navigate(`/repositories/${item.id}`)
  }

  return (
    <RepositoryListContainer repositories={repositories} handlePress={handlePress}/>
  );
};

export default RepositoryList;