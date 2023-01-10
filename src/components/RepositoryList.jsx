import { FlatList, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import ItemSeparator from './ItemSeparator';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';



export const RepositoryListContainer = ({ repositories, handlePress }) => {

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
    navigate(`/repositories/${item.id}`)
  }

  return (
    <RepositoryListContainer repositories={repositories} handlePress={handlePress}/>
  );
};

export default RepositoryList;