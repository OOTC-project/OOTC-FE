import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import ImageBox from '../atoms/ImagesBox';

const ImageBoxContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxConatainer}>
        <ImageBox height={'33%'} margin={0.3} borderRadius={5} />
        <ImageBox height={'33%'} margin={0.3} borderRadius={5} />
        <ImageBox height={'33%'} margin={0.3} borderRadius={5} />
        <ImageBox height={'33%'} margin={0.3} borderRadius={5} />
        <ImageBox height={'33%'} margin={0.3} borderRadius={5} />
        <ImageBox height={'33%'} margin={0.3} borderRadius={5} />
        <ImageBox height={'33%'} margin={0.3} borderRadius={5} />
        <ImageBox height={'33%'} margin={0.3} borderRadius={5} />
        <ImageBox height={'33%'} margin={0.3} borderRadius={5} />
      </View>
    </View>
  );
};

export default ImageBoxContainer;

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111111',
    display: 'flex',
    borderRadius: 13,
    padding: 5,
    marginHorizontal: 20,
    width: screenWidth / 4 - 20,
  },
  boxConatainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    height: '100%',
  },
});
