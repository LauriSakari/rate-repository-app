
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (selectedSorting, searchQuery) => {

  let variables = {
    orderBy: "CREATED_AT", searchKeyword: searchQuery,
    first: 6,
  }

    switch (selectedSorting) {
      case "RATING_AVERAGE":
        variables= {
          orderBy: "RATING_AVERAGE",
          searchKeyword: searchQuery,
          first: 6, 
        }
        break
      case "RATING_AVERAGE_ASC":
        variables= {
          orderBy: "RATING_AVERAGE",
          orderDirection: "ASC",
          searchKeyword: searchQuery,
          first: 6,
        }
        break
      default:
        variables
    }

    
const { data, error, loading, fetchMore} = useQuery(GET_REPOSITORIES, {
  fetchPolicy: 'cache-and-network',
  variables
});

const repositories = data ? data.repositories : undefined

return { repositories, error, loading, fetchMore };

};

export default useRepositories;