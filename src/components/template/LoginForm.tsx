import { View, Text, StyleSheet, Keyboard, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import LoginBox from '../organism/LoginBox';
import SocialBox from '../organism/SocialBox';
import LoginOption from '../organism/LoginOption';
import LoginButton from '../molecules/LoginBox';
import { verticalScale } from '../../utils/styleGuide';

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

  return (
    <View style={styles.container}>
      <LoginBox />
      <View style={styles.formContainer}>
        <LoginButton />
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
