import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Theme from '../../utils/styleGuide';

const SocialBox = () => {
  const socialLogos = [
    require('../../../assets/naver_logo.png'),
    require('../../../assets/kakao_logo.png'),
    require('../../../assets/apple_logo.png'),
    require('../../../assets/google_logo.png'),
  ];

  return (
    <View style={styles.loginForm}>
      {socialLogos.map((logo, index) => (
        <TouchableOpacity key={index}>
          <Image source={logo} style={styles.image} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SocialBox;

const styles = StyleSheet.create({
  loginForm: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Theme.width * 45,
    height: Theme.height * 45,
    margin: 18,
  },
});
