import { RouteProp, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import {} from '../../api/productsApi';
import useProducts from '../../hooks/useProducts';
import { TCategory } from '../../interfaces';
import { ERouteNames } from '../../interfaces/navigation/routeNames';
import { AppStackParamList } from '../../interfaces/navigation/routeParams';

const SearchResultsScreen = () => {
  const {
    params: { category },
  } =
    useRoute<RouteProp<AppStackParamList, ERouteNames.SEARCH_RESULTS_SCREEN>>();

  const { getProductsCategories } = useProducts();

  useEffect(() => {
    getProductsCategories(category as TCategory);
  }, [category]);

  return (
    <View>
      <Text>Search results screen</Text>
    </View>
  );
};

export default SearchResultsScreen;
