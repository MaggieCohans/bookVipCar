import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../views/Search';
import HomeScreen from '../views/Home';
import BookScreen from '../views/Book';
import SettingScreen from '../views/Setting';
import LanguageScreen from '../views/Setting/Language';
import { MainStackParamList } from './type';
import { COLORS } from '../common/index';
import Payment from '../views/Payment';
import ListCar from '../views/ListCars';
import NotificationScreen from '../views/Setting/Notification';
import PromotionScreen from '../views/Setting/Promos';
import PointScreen from '../views/Setting/Point';
import ReedemScreen from '../views/Setting/Reedem';
import RatingScreen from '../views/Rating';
import MethodPayment from '../views/Payment/Payment';
const Stack = createNativeStackNavigator<MainStackParamList>();
export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        // headerStyle: {backgroundColor: COLORS.primary},
        headerShown: false,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitleStyle: { color: '#000088', fontWeight: 'bold' },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={
          {
            // headerTitleStyle: {color: '#000088', fontWeight: 'bold'},
            // headerTitleAlign: 'center',
          }
        }
      />
      <Stack.Screen name="ListCar" component={ListCar} />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name="Payment"
        component={Payment}
      />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name="MethodPayment"
        component={MethodPayment}
      />
    </Stack.Navigator>
  );
};

export const SearchStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerShown: false,
      }}>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerTitleStyle: { color: '#000088', fontWeight: 'bold' },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Book"
        component={BookScreen}
        options={{
          headerTitleStyle: { color: '#000088', fontWeight: 'bold' },
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export const BookStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Book"
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerShown: false,
      }}>
      <Stack.Screen
        name="Book"
        component={BookScreen}
        options={{
          headerTitleStyle: { color: '#000088', fontWeight: 'bold' },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitleStyle: { color: '#000088', fontWeight: 'bold' },
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export const SettingStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Setting"
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerShown: false,
        headerTitleStyle: { color: '#000088', fontWeight: 'bold' },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Book" component={BookScreen} />
      <Stack.Screen name="Language" component={LanguageScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Promos" component={PromotionScreen} />
      <Stack.Screen name="EarnPoint" component={PointScreen} />
      <Stack.Screen name="ReedemPoint" component={ReedemScreen} />
      <Stack.Screen name="Rating" component={RatingScreen} />
    </Stack.Navigator>
  );
};
