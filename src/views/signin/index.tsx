import { Alert, ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import { styles } from './style';
import { BaseButton, PrimaryButton } from '../../components/Button';
import { TextField } from 'react-native-ui-lib';
import { NormalText } from '../../components/Text';
import { SiginScreenProps } from '../../navigator/type';
import { useAppDispatch } from '../../hooks/redux';
import { updateSignIn } from '../../redux/slices/AppSlice';
import { useTranslation } from 'react-i18next';
import { saveData } from '../../helpers';
import { signIn } from '../../api';

export default function SignInScreen({ navigation }: SiginScreenProps) {
  const { t, i18n } = useTranslation();

  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();

  const onSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleSignIn = async () => {
    setIsLoading(true);
    return signIn({ email: email, pass: pass })
      .then((response) => response.json())
      .then((res) => {
        if (res.status == 200) {
          saveData("user_id", res.user_id)
          dispatch(updateSignIn(true));
        } else {
          Alert.alert(t("SignIn failed!"), t("Please check your email and password."));
        }
      })
      .finally(() =>
        setIsLoading(false)
      );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <View style={[styles.box]}>
          <BaseButton title={t("Sign Up")} style={styles.btn} onPress={onSignUp} />
          <BaseButton title={t("Sign In")} style={[styles.btn, styles.isActive]} />
        </View>
        <TextField
          placeholder={t('Email')}
          floatingPlaceholder
          onChangeText={(txt: string) => setEmail(txt)}
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
          onChangeText={(txt: string) => setPass(txt)}
          enableErrors
          validate={['required', (pass: string) => pass.length >= 8]}
          validationMessage={[t('Field is required'), t('Password is too short')]}
          validateOnBlur
          secureTextEntry={true}
          containerStyle={{ marginBottom: 10 }}
          style={{ fontSize: 18 }}
        />
        <PrimaryButton title={!isLoading ? t("Sign In").toLocaleUpperCase() : 'Loading...'} onPress={handleSignIn} />
        <View style={[styles.box, styles.mV10]}>
          <View style={styles.hr} />
          <View style={styles.textHr}>
            <NormalText content={`  ${t('OR')}  `} color="#bbb" />
          </View>
          <View style={styles.hr} />
        </View>
        <View style={[styles.box, styles.mV10]}>
          <NormalText content={t("New user?")} color="#000" />
          <BaseButton
            title={t("Sign Up")}
            titleStyle={styles.titleSignup}
            style={{ borderWidth: 0 }}
            onPress={onSignUp}
          />
        </View>
      </View>
    </ScrollView>
  );
}
