import React, { Component } from 'react';
import WebView, { WebViewNavigation } from 'react-native-webview';

interface PaymentViewProps {
  navigation: any
}
interface PaymentViewState { }

export default class PaymentView extends Component<
  PaymentViewProps,
  PaymentViewState
> {
  webview: any = null;

  render() {
    return (
      <WebView
        ref={ref => (this.webview = ref)}
        source={{ uri: 'https://sandbox.vnpayment.vn/tryitnow/Home/CreateOrder' }}
        onNavigationStateChange={this.handleWebViewNavigationStateChange}
      />
    );
  }

  handleWebViewNavigationStateChange = (newNavState: WebViewNavigation) => {
    // newNavState looks something like this:
    // {
    //   url?: string;
    //   title?: string;
    //   loading?: boolean;
    //   canGoBack?: boolean;
    //   canGoForward?: boolean;
    // }
    const { url } = newNavState;
    if (!url) {
      return;
    }
    console.log(url);
    // handle certain doctypes
    if (url.includes('.pdf')) {
      this.webview.stopLoading();
      // open a modal with the PDF viewer
    }

    // one way to handle a successful form submit is via query strings
    if (url.includes('&vnp_ResponseCode=00')) {

      this.webview.stopLoading();
      // maybe close this view?
    }

    // one way to handle errors is via query string
    if (url.includes('?errors=true')) {
      console.log("Payment failed");
      this.webview.stopLoading();
    }

    // redirect somewhere else
    if (url.includes('google.com')) {
      const newURL = 'https://reactnative.dev/';
      const redirectTo = 'window.location = "' + newURL + '"';
      this.webview.injectJavaScript(redirectTo);
    }
  };
}
