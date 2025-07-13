import { NavigatorScreenParams } from '@react-navigation/native';
import { ERouteNames } from './routeNames';

export type AuthStackParamList = {
  [ERouteNames.SIGN_IN_SCREEN]: undefined;
  [ERouteNames.SIGN_UP_SCREEN]: undefined;
};

export type AppStackParamList = {
  [ERouteNames.TABS_SCREEN]: NavigatorScreenParams<TabsStackParamList>;
  [ERouteNames.MAIN_SCREEN]: undefined;
  [ERouteNames.PROFILE_SCREEN]: undefined;
};

export type TabsStackParamList = {
  [ERouteNames.SEARCH_SCREEN]: undefined;
  [ERouteNames.MAP_SCREEN]: undefined;
  [ERouteNames.SHOP_CART_SCREEN]: undefined;
};
