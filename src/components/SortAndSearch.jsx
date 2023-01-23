import {Picker} from '@react-native-picker/picker';
import { Searchbar } from 'react-native-paper';

const SortAndSearch = (onChangeSearch, searchQuery, setSelectedSorting, selectedSorting) =>{

    console.log(onChangeSearch, searchQuery, setSelectedSorting, selectedSorting)
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
</>
)

}

export default SortAndSearch