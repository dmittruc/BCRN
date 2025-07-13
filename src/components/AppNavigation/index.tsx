import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';
import useAuth from '../../hooks/useAuth';
import { ERouteNames } from '../../interfaces/navigation/routeNames';
import {
  AppStackParamList,
  AuthStackParamList,
} from '../../interfaces/navigation/routeParams';
import MainScreen from '../../screens/MainScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import SignInScreen from '../../screens/SignInScreen';
import SignUpScreen from '../../screens/SignUpScreen';
import CustomHeader from '../CustomHeader';
import Tabs from '../Tabs';
import { navigationRef } from './RootNavigation';
import styles from './styles';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const AppStack = createNativeStackNavigator<AppStackParamList>();

const AppNavigation = () => {
  const { accessToken } = useAuth();

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <NavigationContainer ref={navigationRef}>
        {!accessToken ? (
          <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen
              name={ERouteNames.SIGN_IN_SCREEN}
              component={SignInScreen}
            />
            <AuthStack.Screen
              name={ERouteNames.SIGN_UP_SCREEN}
              component={SignUpScreen}
            />
          </AuthStack.Navigator>
        ) : (
          <AppStack.Navigator
            screenOptions={{ header: () => <CustomHeader /> }}>
            <AppStack.Screen name={ERouteNames.TABS_SCREEN} component={Tabs} />
            <AppStack.Screen
              name={ERouteNames.MAIN_SCREEN}
              component={MainScreen}
            />
            <AppStack.Screen
              name={ERouteNames.PROFILE_SCREEN}
              component={ProfileScreen}
            />
          </AppStack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default AppNavigation;
