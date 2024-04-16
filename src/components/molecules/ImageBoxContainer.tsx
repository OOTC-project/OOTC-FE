import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import ImageBox from '../atoms/ImagesBox';

const ImageBoxContainer = () => {
  return (
    <View style={styles.container}>
      <ImageBox height={'30%'} margin={1.2} borderRadius={5} />
      <ImageBox height={'30%'} margin={1.2} borderRadius={5} />
      <ImageBox height={'30%'} margin={1.2} borderRadius={5} />
      <ImageBox height={'30%'} margin={1.2} borderRadius={5} />
      <ImageBox height={'30%'} margin={1.2} borderRadius={5} />
      <ImageBox height={'30%'} margin={1.2} borderRadius={5} />
    </View>
  );
};

export default ImageBoxContainer;

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111111',
    height: '100%',
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 13,
    padding: 7,
  },
});
