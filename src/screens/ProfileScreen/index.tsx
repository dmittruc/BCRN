import { Text, View } from 'react-native';
import CustomButton from '../../components/CustomButton';
import useAuth from '../../hooks/useAuth';
import styles from './styles';

const ProfileScreen = () => {
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
  };
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <CustomButton onPress={handleLogout}>Log out</CustomButton>
    </View>
  );
};

export default ProfileScreen;
