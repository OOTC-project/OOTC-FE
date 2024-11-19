import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Keyboard,
} from 'react-native';
import { useState, useEffect } from 'react';
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

const LoginBox = ({ signUp = false, formData, handleChange }: LoginBoxProp) => {
  const [isKeyboardOpen, setKeyboardOpen] = useState(false);

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardOpen(true);
    });
    const keyboardHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardOpen(false);
    });

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        style={[
          styles.scrollView,
          signUp && isKeyboardOpen ? { height: 300 } : null,
        ]}
      >
        {signUp && (
          <InputBox
            title="이름"
            placeHolder="예) ootc"
            autoFocus
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
          secureTextEntry
          formData={formData.pw}
          handleChange={handleChange}
          name="pw"
        />
        {signUp && (
          <InputBox
            title="비밀번호 확인"
            secureTextEntry
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
    paddingRight: 15,
    paddingLeft: 15,
  },
  scrollView: {
    flex: 1,
  },
});
