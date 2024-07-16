import { View, Text, StyleSheet, Alert } from 'react-native';
import React from 'react';
import LoginBox from './LoginBox';
import Button from '../atoms/Button';
import useFormData from '../../utils/useFormData';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useMutation } from 'react-query';
import { PostSignUp } from '../../api/auth';
import { AxiosError } from 'axios';
import { RootStackParamList } from '../../types';

export interface SignUpBoxType {
  name: string;
  id: string;
  email: string;
  pw: string;
  pwCheck: string;
}

const SignUpBox = () => {
  const { formData, handleChange } = useFormData<SignUpBoxType>(SignUpBoxData);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const { mutate: postMutate } = useMutation(PostSignUp, {
    onSuccess: () => {
      Alert.alert(`등록이 완료되었습니다.`);
      navigation.goBack();
    },
    onError: (e: AxiosError) => {
      if (e.response?.status === 400) {
        Alert.alert(`비밀번호와 비밀번호 확인이 일치하지 않습니다.`);
      } else if (e.response?.status === 409) {
        Alert.alert(`아이디 형식을 확인해주세요.`);
      } else {
        Alert.alert(`알 수 없는 오류가 발생했습니다. 다시 시도해주세요.`);
      }
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>회원가입</Text>
      <LoginBox signUp formData={formData} handleChange={handleChange} />
      <Button
        text="가입하기"
        color="#fff"
        backgroundColor="#1a63f6"
        fontSize={18}
        onPress={() => {
          postMutate({
            name: formData.name,
            userId: formData.id,
            email: formData.email,
            password: formData.pw,
            passwordConfirm: formData.pwCheck,
          });
        }}
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
