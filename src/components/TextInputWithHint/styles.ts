import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  hintText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 2,
  },
  textInput: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.gray1,
    paddingHorizontal: 12,
    height: 50,
    color: 'yellow',
  },
});

export default styles;
