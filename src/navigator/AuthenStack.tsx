import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthenStackParamList } from './type';
import SignInScreen from '../views/signin';
import SignUpScreen from '../views/SignUp';

const Stack = createNativeStackNavigator<AuthenStackParamList>();
export default function AuthenStack() {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right"
      }}>
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  );
}
