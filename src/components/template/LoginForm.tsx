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
import { PostSignIn } from '../../api/auth';
import { useMutation } from 'react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setAccessToken } from '../../redux/slice/userSlice';
import { PostSignInType } from '../../api/types';

export interface LoginFormDataType {
  id: string;
  pw: string;
}

const LoginForm = () => {
  const navigation = useNavigation<NavigationProp<any>>();

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
  const dispatch = useDispatch();

  const handleLogin = () => {
    mutate(
      { userId: formData.id, password: formData.pw },
      {
        onSuccess: async (data: PostSignInType) => {
          if (data.data && data.data.accessToken) {
            const { accessToken } = data.data;

            try {
              dispatch(setAccessToken(accessToken));
              await AsyncStorage.setItem('@user_token', accessToken);
              navigation.navigate('OOTC');
            } catch (error) {
              console.error('Token error', error);
            }
          } else {
            console.error('Access token is missing in the response data');
          }
        },
        onError: () => {
          Alert.alert('Please check your username or password.');
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
