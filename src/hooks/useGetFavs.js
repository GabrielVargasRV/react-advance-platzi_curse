import {gql} from '@apollo/client'
import {useQuery} from '@apollo/react-hooks'

const GET_FAVORITES = gql`
query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;


export const useGetFavorites = () => {
  const { data, error, loading } = useQuery(GET_FAVORITES, { fetchPolicy: 'cache-and-network' });
  return { data, loading, error };
};
