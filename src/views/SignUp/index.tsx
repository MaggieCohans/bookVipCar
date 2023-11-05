import { Alert, ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { BaseButton, PrimaryButton } from '../../components/Button';
import { TextField } from 'react-native-ui-lib';
import { NormalText } from '../../components/Text';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SiginoutScreenProps } from '../../navigator/type';
import { useTranslation } from 'react-i18next';

export default function SignUpScreen({ navigation }: SiginoutScreenProps) {
  const { t, i18n } = useTranslation();

  const [email, setEmail] = useState<String>("");
  const [pass, setPass] = useState<String>("");
  const [passComfirm, setPassComfirm] = useState<String>();
  const [isLoading, setIsLoading] = useState(false);

  const authenList = [
    ['facebook', 'blue'],
    ['google', '#DB4437'],
  ];

  const onSignIn = () => {
    navigation.navigate('SignIn');
  };

  const handleSignUp = async () => {
    if (pass == passComfirm) {
      setIsLoading(true);
      await fetch("http://127.0.0.1:8000/api/v1/create-account", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: email.slice(0, email.indexOf('@')),
          password: pass,
          email: email
        })
      })
        .then((response) => response.json())
        .then((res) => {
          console.log('====================================');
          console.log(res);
          console.log('====================================');
          if (res.status == 200) {
            setIsLoading(false);
            navigation.navigate('SignIn');
          }
        })
    } else {
      Alert.alert(t("SignUp failed"), t("Password is not match. Please try again."));
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <View style={[styles.box]}>
          <BaseButton title={t("Sign Up")} style={[styles.btn, styles.isActive]} />
          <BaseButton title={t("Sign In")} style={styles.btn} onPress={onSignIn} />
        </View>
        <TextField
          placeholder={t('Email')}
          floatingPlaceholder
          onChangeText={txt => setEmail(txt)}
          enableErrors
          validate={['required', 'email', (email: string) => email.length > 6]}
          validateOnBlur
          validationMessage={[t('Field is required'), t('Email is invalid')]}
          style={{ fontSize: 18 }}
          containerStyle={{ marginTop: 10 }}
        />
        <TextField
          placeholder={t('Password')}
          floatingPlaceholder
          onChangeText={txt => setPass(txt)}
          enableErrors
          validate={['required', (pass: string) => pass.length >= 8]}
          validationMessage={[t('Field is required'), t('Password is too short')]}
          validateOnBlur
          secureTextEntry={true}
          containerStyle={{ marginBottom: 10 }}
          style={{ fontSize: 18 }}
        />
        <TextField
          placeholder={t('Confirm Password')}
          floatingPlaceholder
          onChangeText={txt => setPassComfirm(txt)}
          enableErrors
          validate={['required', (pass: string) => pass.length >= 8]}
          validationMessage={[t('Field is required'), t('Password is too short')]}
          validateOnBlur
          secureTextEntry={true}
          containerStyle={{ marginBottom: 10 }}
          style={{ fontSize: 18 }}
        />
        <PrimaryButton title={!isLoading ? t("Sign Up").toLocaleUpperCase() : 'Loading...'} onPress={handleSignUp} />
        <View style={[styles.box, styles.mV10]}>
          <View style={styles.hr} />
          <View style={styles.textHr}>
            <NormalText content={` ${t('OR')} `} color="#bbb" />
          </View>
          <View style={styles.hr} />
        </View>
        <View style={styles.box}>
          {authenList.map((item, index) => {
            return (
              <BaseButton
                title="authen"
                key={index}
                style={{ marginHorizontal: 8 }}>
                <Icon name={item[0]} color={item[1]} size={14} />
              </BaseButton>
            );
          })}
        </View>
        <View style={[styles.box, { marginTop: 8 }]}>
          <NormalText content={t("Already a user?")} color="#000" />
          <BaseButton
            title={t("Sign In")}
            titleStyle={styles.titleSignin}
            style={{ borderWidth: 0 }}
            onPress={onSignIn}
          />
        </View>
      </View>
    </ScrollView>
  );
}
