
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (selectedSorting, searchQuery) => {

  console.log(searchQuery)

  let variables = {"orderBy": "CREATED_AT", "searchKeyword": searchQuery }

    switch (selectedSorting) {
      case "RATING_AVERAGE":
        variables= {
          "orderBy": "RATING_AVERAGE",
          "searchKeyword": searchQuery
        }
        break
      case "RATING_AVERAGE_ASC":
        variables= {
          "orderBy": "RATING_AVERAGE",
          "orderDirection": "ASC",
          "searchKeyword": searchQuery
        }
        break
      default:
        variables = {"orderBy": "CREATED_AT", "searchKeyword": searchQuery}
    }

    
const { data, error, loading} = useQuery(GET_REPOSITORIES, {
  fetchPolicy: 'cache-and-network',
  variables
});

const retunrWhileLoading = []

if (loading) {
  return { retunrWhileLoading, loading, error }
}

const repositories = data.repositories

return { repositories, loading, error };

};

export default useRepositories;