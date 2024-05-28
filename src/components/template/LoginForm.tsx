import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  Dimensions,
  Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import LoginBox from '../organism/LoginBox';
import SocialBox from '../organism/SocialBox';
import LoginOption from '../organism/LoginOption';
import LoginButton from '../molecules/LoginBox';
import { verticalScale } from '../../utils/styleGuide';
import useFormData from '../../utils/useFormData';
import { PostSignIn } from '../../api/query';
import { useMutation } from 'react-query';

export interface LoginFormDataType {
  id: string;
  pw: string;
}

const LoginForm = () => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const { formData, handleChange } = useFormData(LoginFormData);

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (formData.id.length > 0 || formData.pw.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  });

  const { mutate } = useMutation(PostSignIn);

  const handleLogin = () => {
    mutate(
      { userId: formData.id, password: formData.pw },
      {
        onSuccess: e => {
          console.log(e);
        },
        onError: () => {
          Alert.alert('아이디 또는 비밀번호를 확인해주세요.');
        },
      },
    );
  };

  return (
    <View style={styles.container}>
      <LoginBox formData={formData} handleChange={handleChange} />
      <View style={styles.formContainer}>
        <LoginButton disabled={disabled} onPress={handleLogin} />
        <LoginOption />
      </View>
      <View style={styles.socialLoginBox}>
        <Text style={styles.socialText}>간단하게 로그인하기</Text>
      </View>
      {!keyboardVisible && <SocialBox />}
    </View>
  );
};

export default LoginForm;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    marginTop: verticalScale(30),
    padding: 5,
    width: 'auto',
  },

  formContainer: {
    width: screenWidth,
  },

  socialLoginBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },

  socialText: { color: 'gray' },
});

const LoginFormData: LoginFormDataType = {
  id: '',
  pw: '',
};
