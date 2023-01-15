
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (selectedSorting) => {

  let variables = {"orderBy": "CREATED_AT"}

    switch (selectedSorting) {
      case "RATING_AVERAGE":
        variables= {
          "orderBy": "RATING_AVERAGE"
        }
        break
      case "RATING_AVERAGE_ASC":
        variables= {
          "orderBy": "RATING_AVERAGE",
          "orderDirection": "ASC"
        }
        break
      default:
        variables = {"orderBy": "CREATED_AT"}
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