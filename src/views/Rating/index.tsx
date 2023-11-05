import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import {useTranslation} from 'react-i18next';
import { RatingScreenProps } from '../../navigator/type';

const RatingScreen = ( {navigation}: RatingScreenProps ) => {
  const [rating, setRating] = useState(0);

  const onStarRatingPress = (rating: React.SetStateAction<number>) => {
  
    setRating(rating);
  };

  const {t, i18n} = useTranslation();

  function submitRating(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={20} style={{ marginRight: 5 }} />
            <Text style={styles.backButtonText}>{t('Rating App')}</Text>
        </TouchableOpacity>
      <Text style={styles.header}>{t('Product reviews')}</Text>
      <StarRating
        disabled={false}
        maxStars={5}
        rating={rating}
        selectedStar={(rating) => onStarRatingPress(rating)}
      />
      <Text style={styles.ratingText}>{t('Your reviews')} {rating} {t('Star')}</Text>
      <TouchableOpacity style={styles.button} onPress={() => submitRating()}>
        <Text style={styles.buttonText}>{t('Submit a review')}</Text>
      </TouchableOpacity>
    </View>
    
  );
};
export default RatingScreen;
