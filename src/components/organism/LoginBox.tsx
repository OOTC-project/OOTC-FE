import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import InputBox from '../molecules/InputBox';
import LoginButton from '../molecules/LoginBox';
import LoginOption from './LoginOption';

interface LoginBoxProp {
  signUp?: boolean;
}
const LoginBox = ({ signUp }: LoginBoxProp) => {
  return (
    <View style={styles.container}>
      {signUp && (
        <InputBox title="이름" placeHolder="예) ootc" autoFocus={true} />
      )}
      <InputBox title="아이디" placeHolder="예) thisIsOotcId" />
      {signUp && (
        <InputBox title="이메일" placeHolder="예) thisIsOotcId@gmail.com" />
      )}
      <InputBox title="비밀번호" secureTextEntry={true} />

      {signUp && <InputBox title="비밀번호 확인" />}
    </View>
  );
};

export default LoginBox;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
  },
});
