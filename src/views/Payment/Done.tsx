import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { View } from 'react-native-ui-lib'
import { PrimaryText, SecondaryText } from '../../components/Text'
import { PrimaryButton } from '../../components/Button'
import { styles } from './styles'
import { PaymentScreenProps } from '../../navigator/type'
import { useTranslation } from 'react-i18next'

export default function Done({ navigation }: PaymentScreenProps) {
    const { t, i18n } = useTranslation();

    return (
        <View style={{ marginTop: 180, justifyContent: 'center', alignItems: 'center' }}>
            <Icon name='checkmark-circle' size={100} color={'green'} style={{ textAlign: 'center' }} />
            <PrimaryText content={t('Booked the car successfully')} color='#000' />
            <SecondaryText content={t('Wish you have a nice trip!')} color='#000' style={[styles.lableText, { marginBottom: 20 }]} />
            <PrimaryButton title={t('Home')} onPress={() => navigation.navigate('Home')} />
        </View>
    )
}