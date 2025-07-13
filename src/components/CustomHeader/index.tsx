import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ERouteNames } from '../../interfaces/navigation/routeNames';
import { AppStackParamList } from '../../interfaces/navigation/routeParams';
import { Colors } from '../../theme/colors';

interface IProps {
  isGoBack?: boolean;
}
const CustomHeader = ({ isGoBack }: IProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  const handleProfilePress = () => {
    navigation.navigate(ERouteNames.PROFILE_SCREEN);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View>
        {isGoBack && (
          <TouchableOpacity onPress={handleGoBack}>
            <Text style={styles.profileText}>Back</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.side}>
        <TouchableOpacity onPress={handleProfilePress}>
          <Text style={styles.profileText}>Профиль</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    height: 80,
    paddingHorizontal: 16,
    backgroundColor: Colors.gray2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  profileText: {
    fontSize: 20,
    justifyContent: 'flex-end',
  },
  side: {
    width: 90,
    alignItems: 'center',
  },
});
