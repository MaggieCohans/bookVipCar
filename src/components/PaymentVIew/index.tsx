import React, { useState, useEffect } from 'react'
import WebView, { WebViewNavigation } from 'react-native-webview';
import { useAppDispatch } from '../../hooks/redux';
import { updateTransactionStatus } from '../../redux/slices/AppSlice';
import { getData } from '../../helpers';

export default function PaymentView({ navigation }: any) {
      const [urlPayment, setUrlPayment] = useState("");

      useEffect(() => {
            const getUrl = async () => {
                  const url = await getData("urlPay");
                  setUrlPayment(url);
            }
            getUrl();
            console.log('====================================');
            console.log(urlPayment);
            console.log('====================================');
      }, [])

      const dispatch = useAppDispatch();
      const handleWebViewNavigationStateChange = (newNavState: WebViewNavigation) => {
            const { url } = newNavState;
            if (!url) {
                  return;
            }
            console.log(url);
            if (url.includes('&vnp_ResponseCode=00')) {
                  dispatch(updateTransactionStatus(0));
                  navigation.navigate('Payment');
            }
            if (url.includes('&vnp_ResponseCode=01')) {
                  dispatch(updateTransactionStatus(1));
                  navigation.navigate('Payment');
            }
            if (url.includes('&vnp_ResponseCode=02')) {
                  dispatch(updateTransactionStatus(2));
                  navigation.navigate('Payment');
            }
            if (url.includes('&vnp_ResponseCode=04')) {
                  dispatch(updateTransactionStatus(4));
            }
            if (url.includes('&vnp_ResponseCode=05')) {
                  dispatch(updateTransactionStatus(5));
                  navigation.navigate('Payment');
            }
            if (url.includes('&vnp_ResponseCode=06')) {
                  dispatch(updateTransactionStatus(6));
                  navigation.navigate('Payment');
            }
            if (url.includes('&vnp_ResponseCode=07')) {
                  dispatch(updateTransactionStatus(7));
                  navigation.navigate('Payment');
            }
            if (url.includes('&vnp_ResponseCode=09')) {
                  dispatch(updateTransactionStatus(9));
                  navigation.navigate('Payment');
            }
      }
      return (
            <WebView
                  source={{ uri: urlPayment }}
                  onNavigationStateChange={handleWebViewNavigationStateChange}
            />
      );
}