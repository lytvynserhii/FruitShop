import { FC } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { EmptyScreen } from 'screens/EmptyScreen/EmptyScreen';

import { CartTabIcon } from 'components/svg/tabs/CartTabIcon';
import { HomeTabIcon } from 'components/svg/tabs/HomeTabIcon';
import { NotificationTabIcon } from 'components/svg/tabs/NotificationTabIcon';
import { SettingsTabIcon } from 'components/svg/tabs/SettingsTabIcon';

import { PlusTabButton } from './PlusTabButton/PlusTabButton';
import { ROOT_TAB_OPTIONS } from './navigationOptions';

import { TabParamList } from './navigation.types';

const Tab = createBottomTabNavigator<TabParamList>();

export const TabNavigator: FC = () => (
  <Tab.Navigator screenOptions={ROOT_TAB_OPTIONS} initialRouteName="HomeStack">
    <Tab.Screen
      name="HomeStack"
      component={EmptyScreen}
      options={{
        tabBarIcon: HomeTabIcon,
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Notification"
      component={EmptyScreen}
      options={{
        tabBarIcon: NotificationTabIcon,
      }}
    />
    <Tab.Screen
      name="Plus"
      component={EmptyScreen}
      options={{
        tabBarIcon: PlusTabButton,
      }}
    />
    <Tab.Screen
      name="CartStack"
      component={EmptyScreen}
      options={{
        tabBarIcon: CartTabIcon,
      }}
    />
    <Tab.Screen
      name="Settings"
      component={EmptyScreen}
      options={{
        tabBarIcon: SettingsTabIcon,
      }}
    />
  </Tab.Navigator>
);
