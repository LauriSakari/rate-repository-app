import { FlatList, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import ItemSeparator from './ItemSeparator';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';
import {Picker} from '@react-native-picker/picker';
import { Searchbar } from 'react-native-paper';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';



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
  const [searchQuery, setSearchQuery] = useState('');
  const [value] = useDebounce(searchQuery, 500);
  const { repositories } = useRepositories(selectedSorting, value);
  
  const onChangeSearch = query => setSearchQuery(query);

  console.log(searchQuery)
  const navigate = useNavigate()

  const handlePress = (item) => {
    navigate(`/repositories/${item.id}`)
  }
  
  return (
  <>
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
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