import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import FontAwsomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { styles } from './style';
import { useTranslation } from 'react-i18next';
import { SettingScreenProps } from '../../navigator/type';
import { useAppDispatch } from '../../hooks/redux';
import { updateSignIn } from '../../redux/slices/AppSlice';

const SettingScreen = ({ navigation }: SettingScreenProps) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const [name] = useState('Nguyen Thi Anh Tuyet');
  const [mail] = useState('ttuyet1504@gmail.com');

  const rightIconComponent = <EntypoIcon name="chevron-right" size={20} />;

  const optionData = [
    {
      title: t('My Orders'),
      icon: 'shopping-cart',
      rightIcon: 'angle-right',
      onPress: () => navigation.navigate('Book'),
    },
    {
      title: t('Promos'),
      icon: 'tag',
      rightIcon: 'angle-right',
      onPress: () => navigation.navigate('Promos'),
    },

    {
      title: t('Pay Method'),
      icon: 'credit-card',
      rightIcon: 'angle-right',
      onPress: () => { },
    },
    {
      title: t('Change Language'),
      icon: 'language',
      rightIcon: 'angle-right',
      onPress: () => navigation.navigate('Language'),
    },
    {
      title: t('Notification'),
      icon: 'bell',
      rightIcon: 'angle-right',
      onPress: () => navigation.navigate('Notification'),
    },
    {
      title: t('Earn Points'),
      icon: 'credit',
      rightIcon: 'angle-right',
      onPress: () => navigation.navigate('EarnPoint'),
    },
  ];

  const generalOptionData = [
    {
      title: t('Security & Policy'),
      icon: 'shield',
      rightIcon: 'angle-right',
      onPress: () => {
        Linking.openURL('https://www.bookvipcar.com/rules');
      },
    },
    {
      title: t('Rate Booking VJP App'),
      icon: 'star',
      rightIcon: 'angle-right',
      onPress: () => navigation.navigate('Rating'),
    },
    {
      title: t('Logout'),
      icon: 'sign-out',
      rightIcon: 'angle-right',
      onPress: () => dispatch(updateSignIn(false)),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.userInfo}>
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <Image
            source={{
              uri: 'https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-cute-2.jpg',
            }}
            style={styles.avatar}
          />
          <View style={styles.userInfoText}>
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userMail}>{mail}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => console.log('Edit pressed')}>
          <EntypoIcon name="pencil" size={24} />
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>Account</Text>
      {optionData.map((option, index) => (
        <OptionItem
          key={index}
          title={option.title}
          icon={<EntypoIcon name={option.icon} size={18} />}
          rightIcon={rightIconComponent}
          onPress={option.onPress}
        />
      ))}
      <Text style={styles.label}>General</Text>
      {generalOptionData.map((option, index) => (
        <OptionItem
          key={index}
          title={option.title}
          icon={<FontAwsomeIcon name={option.icon} size={20} />}
          rightIcon={rightIconComponent}
          onPress={option.onPress}
        />
      ))}
    </ScrollView>
  );
};

interface OptionItemProps {
  title: string;
  icon: JSX.Element;
  rightIcon: JSX.Element;
  onPress: () => void;
}

const OptionItem: React.FC<OptionItemProps> = ({
  title,
  icon,
  rightIcon,
  onPress,
}) => (
  <TouchableOpacity style={styles.option} onPress={onPress}>
    <View style={styles.optionRow}>
      <View style={styles.iconContainer}>{icon}</View>
      <View style={styles.optionContent}>
        <Text style={styles.optionText}>{title}</Text>
        <View style={styles.iconContainer}>{rightIcon}</View>
      </View>
    </View>
  </TouchableOpacity>
);

export default SettingScreen;
