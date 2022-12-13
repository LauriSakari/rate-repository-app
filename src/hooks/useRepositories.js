
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
    
const { data, error, loading} = useQuery(GET_REPOSITORIES, {
  fetchPolicy: 'cache-and-network',
});

const retunrWhileLoading = []

if (loading) {
  return { retunrWhileLoading, loading, error }
}

const repositories = data.repositories

return { repositories, loading, error };

};

export default useRepositories;