import { FlatList, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import ItemSeparator from './ItemSeparator';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';
import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';



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
  const [selectedSorting, setSelectedSorting] = useState("CREATED_AT");
  const { repositories } = useRepositories(selectedSorting);
  
  const navigate = useNavigate()

  const handlePress = (item) => {
    navigate(`/repositories/${item.id}`)
  }
  
  return (
  <>
    <Picker
      selectedValue={selectedSorting}
      onValueChange={(itemValue) => setSelectedSorting(itemValue)
    }>
      <Picker.Item label="Latest repositories" value="CREATED_AT"/>
      <Picker.Item label="Highest rated repositories" value="RATING_AVERAGE" />
      <Picker.Item label="Lowest rated repositories" value="RATING_AVERAGE_ASC" />
    </Picker>
    <RepositoryListContainer repositories={repositories} handlePress={handlePress}/>
  </>
  );
};

export default RepositoryList;