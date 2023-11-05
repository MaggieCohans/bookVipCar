import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  HomeStack,
  SearchStack,
  BookStack,
  SettingStack,
} from './StackNavigator';
import Octionicons from 'react-native-vector-icons/Octicons';
import {COLORS} from '../common';
import '../translations/index';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();
const TabBar = () => {
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: COLORS.activeTintColor,
        tabBarInactiveTintColor: COLORS.inactiveTintColor,
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerTitleAlign: 'center',
          tabBarLabel: t('Home'),
          tabBarIcon: ({color, size}) => (
            <Octionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchStack"
        component={SearchStack}
        options={{
          headerTitleAlign: 'center',
          tabBarLabel: t('Search'),
          tabBarIcon: ({color, size}) => (
            <Octionicons name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="BookStack"
        component={BookStack}
        options={{
          tabBarLabel: t('Book'),
          tabBarIcon: ({color, size}) => (
            <Octionicons name="file-badge" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingStack"
        component={SettingStack}
        options={{
          tabBarLabel: t('Setting'),
          tabBarIcon: ({color, size}) => (
            <Octionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabBar;
