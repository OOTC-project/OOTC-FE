import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import LoginOptionButton from '../molecules/LoginOptionButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const LoginOption = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const openModal = () => {
    navigation.navigate('SignUpPage');
  };

  return (
    <View style={styles.container}>
      <LoginOptionButton title="회원가입" onPress={openModal} />
      <LoginOptionButton title="아이디 찾기" />
      <LoginOptionButton title="비밀번호 찾기" />
    </View>
  );
};

export default LoginOption;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 20,
  },
});
