import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Button from '../atoms/Button';
import { scale } from '../../utils/styleGuide';

const SocialBox = () => {
  return (
    <View style={styles.loginForm}>
      <TouchableOpacity>
        <Image
          source={require('../../../assets/naver_logo.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../../../assets/kakao_logo.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../../../assets/apple_logo.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../../../assets/google_logo.png')}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SocialBox;

const styles = StyleSheet.create({
  loginForm: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: { width: scale(36), height: scale(36), margin: 18 },
});
