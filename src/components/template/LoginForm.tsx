import { View, Text, StyleSheet, Keyboard, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import LoginBox from '../organism/LoginBox';
import SocialBox from '../organism/SocialBox';
import LoginOption from '../organism/LoginOption';
import LoginButton from '../molecules/LoginBox';
import { verticalScale } from '../../utils/styleGuide';
import useFormData from '../../utils/useFormData';

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

  return (
    <View style={styles.container}>
      <LoginBox formData={formData} handleChange={handleChange} />
      <View style={styles.formContainer}>
        <LoginButton disabled={disabled} />
        <LoginOption />
      </View>
      {!keyboardVisible && <SocialBox />}
    </View>
  );
};

export default LoginForm;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    marginTop: verticalScale(20),
    padding: 5,
    width: 'auto',
  },

  formContainer: {
    width: screenWidth,
  },
});

const LoginFormData: LoginFormDataType = {
  id: '',
  pw: '',
};
