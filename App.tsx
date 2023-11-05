import React from 'react';
import {Provider} from 'react-redux';
import Navigator from './src/navigator';
import {store} from './src/redux/store';
import { requestUserPermission,notificationlistener } from './src/utils/push_notification';
import {useEffect} from 'react';
import {PermissionsAndroid} from 'react-native';
 

const App = () => {
  useEffect(()=>{
    requestUserPermission();
   //PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
    notificationlistener();
  },[])
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
