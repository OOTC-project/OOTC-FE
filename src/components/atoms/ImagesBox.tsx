import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';

const ImageBox = ({ height, margin }: any) => {
  return (
    <View style={[styles.container, { height, margin }]}>
      <Text>1</Text>
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
    backgroundColor: 'blue',
    borderRadius: 5,
    flexDirection: 'column',
  },
});
