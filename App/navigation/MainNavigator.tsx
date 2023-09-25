import {
  NativeStackHeaderProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';
import React, {ReactElement} from 'react';
import {StyleSheet} from 'react-native';
import Colors from '../theme/colors';
import Header from '../uikit/Header';
import Icon from '../uikit/Icon';
import {ICON_CIRCLE_DOWN} from '../assets/icon';

const Stack = createNativeStackNavigator();

function MainNavigator(): ReactElement {
  const defaultHeaderOptions = {
    headerStyle: {
      backgroundColor: Colors.GREEN_47,
    },
    headerTintColor: Colors.WHITE,
  };

  return (
    <Stack.Navigator
      screenOptions={{
        ...defaultHeaderOptions,
      }}
      initialRouteName="MainScreen">
      <Stack.Screen
        options={{...defaultHeaderOptions, headerShown: false}}
        name="MainScreen"
        // @ts-ignore
        component={MainScreen}
      />
    </Stack.Navigator>
  );
}

export default MainNavigator;
