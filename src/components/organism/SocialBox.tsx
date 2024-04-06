import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import Button from '../atoms/Button';

const SocialBox = () => {
  return (
    <View style={styles.loginForm}>
      <Button backgroundColor="#c1c1c13a">
        <View style={styles.buttonContainer}>
          <Image
            source={require('../../../assets/naver_logo.png')}
            style={styles.image}
          />
          <Text>네이버로 로그인</Text>
        </View>
      </Button>
      <Button backgroundColor="#c1c1c13a">
        <View style={styles.buttonContainer}>
          <Image
            source={require('../../../assets/kakao_logo.png')}
            style={styles.image}
          />
          <Text>카카오로 로그인</Text>
        </View>
      </Button>
    </View>
  );
};

export default SocialBox;

const styles = StyleSheet.create({
  loginForm: {
    flex: 0.8,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: { width: 26, height: 26, marginRight: 10 },
});
