import React, {useEffect, useState} from 'react';
import styles from './style';
import {IMAGES} from '../../assets/images/images';
import {Image, Text, View} from 'react-native';
import {updateLoading} from '../../redux/slices/AppSlice';
import {useAppDispatch} from '../../hooks/redux';
// import {getSeatCondition} from '../../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';

const SplashScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const {  i18n } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const key = setTimeout(() => {
      setLoading(false);
    }, 3000);

    getLang();

    const keyLoading = setTimeout(() => {
      dispatch(updateLoading(false));
    }, 6000);

    return () => {
      clearTimeout(key);
      clearTimeout(keyLoading);
    };
  }, [dispatch]);
  const getLang = async () => {
    const value = await AsyncStorage.getItem('LANG');
    if (value) {
      i18n.changeLanguage(value);
    }
  };
  // React.useEffect(() => {
  //   getSeatCondition().then(res => {
  //     console.log('====================================');
  //     console.log(res.data);
  //     console.log('====================================');
  //   });
  // }, []);

  return (
    <View style={styles.splash}>
      {loading ? (
        <Image source={IMAGES.logo} />
      ) : (
        <View>
          <Image source={IMAGES.logo} />
          <Text style={styles.content}> Splash Screen Content</Text>
        </View>
      )}
    </View>
  );
};

export default SplashScreen;
