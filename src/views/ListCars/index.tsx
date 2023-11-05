import React, { useEffect, useState } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../common';
import {
  Heading,
  NormalText,
  PrimaryText,
  SecondaryText,
} from '../../components/Text';
import { PrimaryButton } from '../../components/Button';
import { styles } from './styles';
import { Card } from 'react-native-ui-lib';
import { ListCarsScreenProps } from '../../navigator/type';
import { useTranslation } from 'react-i18next';
import Rating from '../../components/Rating';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { saveData } from '../../helpers';

export default function ListCar({ navigation, route }: ListCarsScreenProps) {
  const { t, i18n } = useTranslation();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <AwesomeIcon name="arrow-left" size={20} />
        <NormalText content={t('List car')} style={styles.backButtonText} />
      </TouchableOpacity>
      {route.params.length != 0 ?
        <View style={styles.wrapper}>
          <PrimaryText
            content={t('Had found')}
            color={COLORS.secondary}
            textAlign="center"
          />
          {route.params.map((item, index) => (
            <Card key={index} style={styles.card}>
              <Image
                source={{ uri: item.imagePath }}
                width={180}
                style={{ objectFit: 'contain' }}
              />
              <View style={styles.textContainer}>
                <PrimaryText content={item.brand} color={COLORS.primary} />
                <SecondaryText content={parseFloat(item.price).toLocaleString() + " VND"} style={styles.textPrice} />
                <NormalText content={t("For 9 hours/100km")} color={COLORS.primary} />
                <Rating stars={5} />
                <PrimaryButton
                  onPress={() => {
                    saveData("carBooking", {
                      id: item.id,
                      price: item.price,
                      imagePath: item.imagePath,
                      brand: item.brand,
                      seats: item.seats,
                      transmission: item.transmission
                    });
                    navigation.navigate('Payment');
                  }}
                  title={t("Booking")}
                />
              </View>
            </Card>
          ))}
        </View>
        :
        <View>
          <Heading
            content={t('Not found')}
            color={COLORS.secondary}
            textAlign="center"
          />
          <SecondaryText content={t('Not found suggest')} />
        </View>
      }
    </ScrollView>
  )
}
