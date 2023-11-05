import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import TabBar from './TabNavigator';
import SplashScreen from '../views/splash';
import AuthenStack from './AuthenStack';
import { useAppSelector } from '../hooks/redux';

const Navigator = () => {
  const app = useAppSelector(state => state.app);

  if (app.isLoading) {
    return <SplashScreen />;
  }
  return (
    <NavigationContainer>
      {!app.isSigned ? <AuthenStack /> : <TabBar />}
    </NavigationContainer>
  );
};
export default Navigator;
