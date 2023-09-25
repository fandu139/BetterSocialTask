import React, {ReactElement} from 'react';
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';
import MainNavigator from './MainNavigator';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from '../uikit/Icon';
import AppStyles from '../theme/appStyles';
import {ICON_CIRCLE_DOWN} from '../assets/icon';
import Header from '../uikit/Header';

const Root = createNativeStackNavigator();

function RootNavigator(): ReactElement {
  const defaultHeaderOptions = {
    headerStyle: {
      backgroundColor: Colors.GREEN_47,
    },
    headerTintColor: Colors.WHITE,
  };

  return (
    <Root.Navigator
      screenOptions={{
        ...defaultHeaderOptions,
      }}
      initialRouteName="MainNavigator">
      <Root.Screen
        options={{headerShown: false}}
        name="MainNavigator"
        component={MainNavigator}
      />
    </Root.Navigator>
  );
}

export default RootNavigator;
