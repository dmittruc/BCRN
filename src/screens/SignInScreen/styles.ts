import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  textInputsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
  },
  textInputContainer: {
    flexDirection: 'column',
  },
  textInput: {
    height: 50,
    width: Dimensions.get('screen').width * 0.9,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
  },
});

export default styles;
