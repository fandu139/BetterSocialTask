import React from 'react';
import {ICON_DASHBOARD, ICON_CHATS, ICON_HISTORY} from '../../assets/icon';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  getFocusedRouteNameFromRoute,
  RouteProp,
} from '@react-navigation/native';
import HomeScreen from '../../screens/Home';
import Colors from '../../theme/colors';
import Fonts from '../../theme/fonts';
import Icon from '../../uikit/Icon';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RouteParams = {
  screen: string;
};

type RootStackParamList = {
  MainScreen: RouteParams;
};

type Props = NativeStackScreenProps<RootStackParamList, 'MainScreen'>;

const BottomTab = createBottomTabNavigator();

function getHeaderTitle(route: RouteProp<RootStackParamList, 'MainScreen'>) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  if (routeName) {
    return routeName;
  }
  return 'Home';
}

const MainScreen: React.FC<Props> = ({navigation, route}: Props) => {
  let tabScreenList = [
    {
      name: 'Home',
      screenName: 'HomeScreen',
      screen: HomeScreen,
      icon: ICON_DASHBOARD,
      tabBarTestID: 'home_tab',
    },
    {
      name: 'Chat',
      screenName: 'ChatScreen',
      screen: HomeScreen,
      icon: ICON_CHATS,
      tabBarTestID: 'account_tab',
    },
    {
      name: 'History',
      screenName: 'HistoryScreen',
      screen: HomeScreen,
      icon: ICON_HISTORY,
      tabBarTestID: 'account_tab',
    },
    {
      name: 'Profile',
      screenName: 'ProfileScreen',
      screen: HomeScreen,
      icon: ICON_CHATS,
      tabBarTestID: 'account_tab',
    },
  ];

  React.useLayoutEffect(() => {
    navigation.setOptions({headerTitle: getHeaderTitle(route)});
  }, [navigation, route]);

  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarAllowFontScaling: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: Colors.GREEN_47,
        tabBarInactiveTintColor: Colors.GRAY70,
        tabBarStyle: {
          height: 60,
          borderTopWidth: 0.3,
        },
        tabBarLabelStyle: {
          marginBottom: 6,
          ...Fonts.bold,
          fontSize: Fonts.size.moreExtraSmall,
        },
      }}>
      {tabScreenList.map(value => {
        let tabOptions: {
          tabBarLabel: string;
          tabBarTestID: string;
          tabBarAccessibilityLabel: string;
          tabBarIcon: ({focused}: {focused: boolean}) => JSX.Element;
          headerShown: boolean;
        } = {
          tabBarLabel: value.name,
          tabBarTestID: value.tabBarTestID,
          tabBarAccessibilityLabel: value.tabBarTestID,
          tabBarIcon: ({focused}: {focused: boolean}) => (
            <Icon
              name={value.icon}
              color={focused ? Colors.GREEN_47 : Colors.GRAY70}
              size={22}
            />
          ),
          headerShown: false,
        };

        return (
          <BottomTab.Screen
            key={value.name}
            name={value.screenName}
            component={value.screen}
            options={tabOptions}
          />
        );
      })}
    </BottomTab.Navigator>
  );
};

export default MainScreen;
