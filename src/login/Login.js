import React, { useState } from 'react';
import { View, Image, Alert, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik';
import styles from './Login.style';
import Input from '../../src/Input/input';
import Button from '../button/button';
import Config from 'react-native-config';

const Login = ({navigation,onLogin}) => {
  const [loading, setLoading] = useState(null);

  const handleLogin = async (values) => {
    console.log(Config.API_AUTH_URL);
    console.log(values);
    try {
      const response = await fetch(Config.API_AUTH_URL + '/accounts/login/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const res = await response.json();
      console.log(res);

      if (res.key) {
        await AsyncStorage.setItem('userKey', res.key);
        onLogin(); // Giriş başarılı olduğunda ana bileşen durumunu güncelliyoruz
      } else {
        Alert.alert('norbit', 'Giriş başarısız'); // Giriş başarısız olduğunda hata mesajı gösteriyoruz
      }
    } catch (error) {
      Alert.alert('norbit', 'tekrar deneyiniz');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image style={styles.logo} source={require('../asset/900967.png')} />
      </View>
      <Formik initialValues={{ email: '', password: '' }} onSubmit={handleLogin}>
        {({ handleSubmit, handleChange, values }) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Kullanıcı Adı"
              values={values.email}
              onType={handleChange('email')}
              iconName="account"
            />
            <Input
              placeholder="Şifre"
              isSecure
              values={values.password}
              onType={handleChange('password')}
              iconName="airplane"
            />
            <Button text="Giriş" onPress={handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;
