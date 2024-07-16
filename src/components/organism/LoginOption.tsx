import { View, StyleSheet } from 'react-native';
import React from 'react';
import LoginOptionButton from '../molecules/LoginOptionButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { scale } from '../../utils/styleGuide';
import { RootStackParamList } from '../../types';

const LoginOption = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const openSignUpModal = () => {
    navigation.navigate('SignUpPage');
  };
  const openFindIdModal = () => {
    navigation.navigate('FindPage', { what: 'id' });
  };
  const openFindPwModal = () => {
    navigation.navigate('FindPage', { what: 'pw' });
  };

  return (
    <View style={styles.container}>
      <LoginOptionButton title="회원가입" onPress={openSignUpModal} />
      <LoginOptionButton title="아이디 찾기" onPress={openFindIdModal} />
      <LoginOptionButton title="비밀번호 찾기" onPress={openFindPwModal} />
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
    marginVertical: scale(10),
  },
});
