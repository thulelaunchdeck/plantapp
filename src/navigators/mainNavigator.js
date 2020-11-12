import React from 'react';
import {Image} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import {LoginScreen, BrowseScreen, ExploreScreen, ForgotScreen, ProductScreen, SettingsScreen, SignUpScreen, Welcomecreen} from '../screens';
import {routes, theme} from '../constants';

const Stack = createStackNavigator();

const screenOptions = {

};

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      // headerTintColor: 'white',
      headerTitle: null,
      // headerTransparent: true,
      headerStyle: {shadowColor: 'transparent'},
      headerBackImage: () => (<Image source={require("../assets/icons/back.png")} style={{marginLeft: theme.sizes.base*2}} />),
      headerBackTitle: ' ',
      cardStyle: {
        backgroundColor: theme.colors.white
      }
    }}>
      <Stack.Screen name={routes.WELCOME} component={Welcomecreen} />
      <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
      <Stack.Screen name={routes.SIGN_UP} component={SignUpScreen} />
      <Stack.Screen name={routes.BROWSE} component={BrowseScreen} />
      <Stack.Screen name={routes.EXPLORE} component={ExploreScreen} />
      <Stack.Screen name={routes.FORGOT} component={ForgotScreen} />
      <Stack.Screen name={routes.PRODUCT} component={ProductScreen} />
      <Stack.Screen name={routes.SETTINGS} component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
