import { RouteProp, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import ProductCard from '../../components/ProductCard';
import useProducts from '../../hooks/useProducts';
import { TCategory } from '../../interfaces';
import { ERouteNames } from '../../interfaces/navigation/routeNames';
import { AppStackParamList } from '../../interfaces/navigation/routeParams';

const SearchResultsScreen = () => {
  const {
    params: { category },
  } =
    useRoute<RouteProp<AppStackParamList, ERouteNames.SEARCH_RESULTS_SCREEN>>();

  const { getProductsCategories, products } = useProducts();

  useEffect(() => {
    getProductsCategories(category as TCategory);
  }, [category]);

  console.log('Products:', products);
  return (
    <View>
      <Text>Search results screen</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductCard
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        )}
        keyExtractor={item => String(item.id)}
      />
    </View>
  );
};

export default SearchResultsScreen;
