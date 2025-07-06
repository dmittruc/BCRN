import { Platform, StatusBar, StyleSheet } from 'react-native';

let statusBarHeight = StatusBar.currentHeight;
if (statusBarHeight === undefined || statusBarHeight === 0) {
  statusBarHeight = 50;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'gray',
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 0,
  },
});

export default styles;
