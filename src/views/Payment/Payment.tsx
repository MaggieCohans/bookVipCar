import { View, Text } from 'react-native'
import React from 'react'
import PaymentView from '../../components/PaymentVIew/index'
import { useNavigation } from '@react-navigation/native'

export default function MethodPayment() {
      const navigation = useNavigation();
      return (
            <View style={{ flex: 1 }}>
                  <PaymentView navigation={navigation} />
            </View>
      )
}