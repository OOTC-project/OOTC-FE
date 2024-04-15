import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import ImageBox from '../atoms/ImagesBox';

const ImageBoxContainer = () => {
  return (
    <View style={styles.bb}>
      <ImageBox />
      <ImageBox />
      <ImageBox />
    </View>
  );
};

export default ImageBoxContainer;

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  bb: {
    justifyContent: 'space-between',
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
