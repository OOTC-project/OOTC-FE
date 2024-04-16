import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import React from 'react';

const ImageBox = ({ height, margin, borderRadius }: any) => {
  return (
    <View style={[styles.container, { height, margin, borderRadius }]}>
      <Image
        source={require('../../../assets/naver_logo.png')}
        style={{ width: '100%', height: '100%' }}
      />
    </View>
  );
};

export default ImageBox;

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '30%',
    height: screenWidth / 5 / 3 - 8,
    flexDirection: 'column',
  },
});
