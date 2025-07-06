import { Platform, StatusBar, StyleSheet } from 'react-native';
import { Colors } from './src/theme/colors';

let statusBarHeight = StatusBar.currentHeight;
if (statusBarHeight === undefined || statusBarHeight === 0) {
  statusBarHeight = 50;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray5,
  },
  safeArea: {
    flex: 1,
    backgroundColor: Colors.gray5,
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 0,
  },
});

export default styles;
