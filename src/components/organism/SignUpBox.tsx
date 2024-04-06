import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import LoginBox from './LoginBox';
import InputBox from '../molecules/InputBox';
import Button from '../atoms/Button';

const SignUpBox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>회원가입</Text>
      <LoginBox signUp />
      <Button
        text="가입하기"
        color="#fff"
        backgroundColor="#1a63f6"
        fontSize={18}
      />
    </View>
  );
};

export default SignUpBox;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: { fontSize: 32, marginBottom: 30 },
});
