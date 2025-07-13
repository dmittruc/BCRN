import React, { useState } from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../../theme/colors';

const сategories = [
  { key: 'liquids', label: 'Жидкости' },
  { key: 'devices', label: 'Устройства' },
  { key: 'parts', label: 'Комплектующие' },
  { key: 'disposables', label: 'Одноразки' },
];

const SearchScreen = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [search, setSearch] = useState('');

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
            onPress={() => setActiveCategory(item.key)}>
            <Text style={[styles.categoryText]}>{item.label}</Text>
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
    backgroundColor: Colors.gray1,
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
    borderRadius: 20,
    backgroundColor: Colors.gray1,
    marginRight: 12,
    marginBottom: 12,
  },
  categoryText: {
    fontSize: 16,
    alignSelf: 'center',
  },
});

export default SearchScreen;
