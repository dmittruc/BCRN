/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import AppNavigation from './src/components/AppNavigation';
import store from './src/store';
import styles from './styles';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
