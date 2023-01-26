import { FlatList, Pressable, View } from 'react-native'
import RepositoryItem from './RepositoryItem'
import ItemSeparator from './ItemSeparator'
import useRepositories from '../hooks/useRepositories'
import { useNavigate } from 'react-router-native'
import { Picker } from '@react-native-picker/picker'
import { Searchbar } from 'react-native-paper'
import { useState } from 'react'
import { useDebounce } from 'use-debounce'
import theme from '../theme'


export const RepositoryListContainer = ({
  repositories, handlePress, onChangeSearch, searchQuery,
  setSelectedSorting, selectedValue, handleEndReached }) => {

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={
        <View >
          <Searchbar
            placeholder="Search"
            backgroundColor="white"
            style={theme.searchBarStyles}
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
          <Picker
            selectedValue={selectedValue}
            style={theme.pickerStyle}
            onValueChange={(itemValue) => setSelectedSorting(itemValue)
            }>
            <Picker.Item label="Latest repositories" value="CREATED_AT"/>
            <Picker.Item label="Highest rated repositories" value="RATING_AVERAGE" />
            <Picker.Item label="Lowest rated repositories" value="RATING_AVERAGE_ASC" />
          </Picker>
        </View>
      }
      renderItem={({ item }) => (
        <Pressable onPress={() => handlePress(item)}>
          <RepositoryItem item={item} />
        </Pressable>
      )}
      onEndReachedThreshold={0.2}
      onEndReached={handleEndReached}
    />
  )
}

const RepositoryList = () => {
  const [selectedSorting, setSelectedSorting] = useState('CREATED_AT')
  const [searchQuery, setSearchQuery] = useState('')
  const [value] = useDebounce(searchQuery, 500)
  const { repositories, fetchMore } = useRepositories(selectedSorting, value)

  const onChangeSearch = query => setSearchQuery(query)

  const handleEndReached = () => {
    if (repositories.pageInfo.hasNextPage) {
      fetchMore({
        variables: {
          after: repositories.pageInfo.endCursor
        }
      })
    }
  }

  const navigate = useNavigate()

  const handlePress = (item) => {
    navigate(`/repositories/${item.id}`)
  }

  return (
    <>
      <RepositoryListContainer repositories={repositories} handlePress={handlePress}
        onChangeSearch={onChangeSearch} searchQuery={searchQuery}
        setSelectedSorting={setSelectedSorting} selectedValue={selectedSorting}
        handleEndReached={handleEndReached}/>
    </>
  )
}

export default RepositoryList