import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { ERouteNames } from '../../interfaces/navigation/routeNames';
import { TabsStackParamList } from '../../interfaces/navigation/routeParams';
import MapScreen from '../../screens/MapScreen';
import ShopCartScreen from '../../screens/ShopCartScreen';
import ShopScreen from '../../screens/ShopScreen';

const TabsStack = createBottomTabNavigator<TabsStackParamList>();

const Tabs = () => {
  return (
    <TabsStack.Navigator screenOptions={{ headerShown: false }}>
      <TabsStack.Screen
        name={ERouteNames.SHOP_SCREEN}
        component={ShopScreen}
        options={{
          tabBarLabel: 'Shop',
        }}
      />
      <TabsStack.Screen
        name={ERouteNames.MAP_SCREEN}
        component={MapScreen}
        options={{
          tabBarLabel: 'Map',
        }}
      />
      <TabsStack.Screen
        name={ERouteNames.SHOP_CART_SCREEN}
        component={ShopCartScreen}
        options={{
          tabBarLabel: 'Cart',
        }}
      />
    </TabsStack.Navigator>
  );
};

export default Tabs;
