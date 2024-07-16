import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Keyboard,
} from 'react-native';
import React, { useState } from 'react';
import InputBox from '../molecules/InputBox';

interface LoginBoxProp {
  signUp?: boolean;
  formData: {
    id: string;
    pw: string;
    email?: string;
    name?: string;
    pwCheck?: string;
  };
  handleChange: (value: string, name: string) => void;
}
const LoginBox = ({ signUp, formData, handleChange }: LoginBoxProp) => {
  const [KeyboardOpen, setKeyboardOpen] = useState(false);
  const keyboardDidShowListener = Keyboard.addListener(
    'keyboardDidShow',
    () => {
      setKeyboardOpen(true);
    },
  );
  const keyboardDidHideListener = Keyboard.addListener(
    'keyboardDidHide',
    () => {
      setKeyboardOpen(false);
    },
  );

  return (
    <View style={styles.container}>
      <ScrollView
        style={{ height: signUp ? (KeyboardOpen ? 300 : null) : null }}
      >
        {signUp && (
          <InputBox
            title="이름"
            placeHolder="예) ootc"
            autoFocus={true}
            handleChange={handleChange}
            name="name"
            formData={formData.name}
          />
        )}
        <InputBox
          title="아이디"
          placeHolder="예) thisIsOotcId"
          formData={formData.id}
          handleChange={handleChange}
          name="id"
        />
        {signUp && (
          <InputBox
            title="이메일"
            placeHolder="예) thisIsOotcId@gmail.com"
            handleChange={handleChange}
            name="email"
            formData={formData.email}
          />
        )}
        <InputBox
          title="비밀번호"
          secureTextEntry={true}
          formData={formData.pw}
          handleChange={handleChange}
          name="pw"
        />

        {signUp && (
          <InputBox
            title="비밀번호 확인"
            secureTextEntry={true}
            handleChange={handleChange}
            name="pwCheck"
            formData={formData.pwCheck}
          />
        )}
      </ScrollView>
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
