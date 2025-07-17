import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { ERouteNames } from '../../interfaces/navigation/routeNames';
import { AppStackParamList } from '../../interfaces/navigation/routeParams';
import { Colors } from '../../theme/colors';

const сategories = [
  { key: 'liquids', label: 'Жидкости' },
  { key: 'devices', label: 'Устройства' },
  { key: 'parts', label: 'Комплектующие' },
  { key: 'disposables', label: 'Одноразки' },
];

const SearchScreen = () => {
  const [search, setSearch] = useState('');
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  const handleCategoryPress = (category: string) => {
    navigation.navigate(ERouteNames.SEARCH_RESULTS_SCREEN, {
      category,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Поиск"
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={сategories}
        keyExtractor={item => item.key}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.categoryButton]}
            onPress={() => handleCategoryPress(item.key)}>
            <Text style={[styles.categoryText]}>{item.label}</Text>
            <Image
              source={require(`../../assets/images/buddy-vape-banner-dark-cat-3.webp`)}
              style={styles.categoryImage}
            />
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.categoryList}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 16,
    backgroundColor: Colors.gray5,
  },
  searchInput: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  categoryList: {
    marginBottom: 16,
  },
  categoryButton: {
    flex: 1,
    aspectRatio: 1,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 16,
    backgroundColor: '#fff',
    marginRight: 12,
    marginBottom: 12,
    paddingBottom: 30,
  },
  categoryText: {
    fontSize: 16,
    alignSelf: 'center',
    marginBottom: 2,
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
});

export default SearchScreen;
