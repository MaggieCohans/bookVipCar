import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import {PermissionsAndroid} from 'react-native';
export async function requestUserPermission() {
  await  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
    getfcmtoken();
  }

 async function getfcmtoken(){
    const fcmtoken=await AsyncStorage.getItem("fcmtoken");
    console.log(fcmtoken,"old token");
    if(!fcmtoken){
    try{
            const fcmtokens=await messaging().getToken();
        if(fcmtokens){
            console.log(fcmtokens,"new token")
            //AsyncStorage.setItem("fcmtoken",fcmtokens);
    }
    }catch(error){
            console.log(error,"error in fcmtoken");
    }
}
}
export const notificationlistener=()=>{
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
          'Notification caused app to open from background state:',
          remoteMessage.notification,
        );
      });
      messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
        }
        
      });
      messaging().onMessage(async remoteMessage=>{
        console.log("notification on forgroud state",remoteMessage)
      })
}