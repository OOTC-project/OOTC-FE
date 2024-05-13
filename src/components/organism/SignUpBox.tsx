import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import LoginBox from './LoginBox';
import InputBox from '../molecules/InputBox';
import Button from '../atoms/Button';
import useFormData from '../../utils/useFormData';

export interface SignUpBoxType {
  name: string;
  id: string;
  email: string;
  pw: string;
  pwCheck: string;
}

const SignUpBox = () => {
  const { formData, handleChange } = useFormData(SignUpBoxData);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>회원가입</Text>
      <LoginBox signUp formData={formData} handleChange={handleChange} />
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

const SignUpBoxData: SignUpBoxType = {
  name: '',
  id: '',
  email: '',
  pw: '',
  pwCheck: '',
};
