import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import ImageBox from '../atoms/ImagesBox';
import { moderateScale, scale } from '../../utils/styleGuide';
import EmptyImagesBox from '../atoms/EmptyImagesBox';

const ImageBoxContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxConatainer}>
        {true ? (
          [1, 2, 3, 4, 5, 6, 7].map(() => (
            <ImageBox height={'33%'} margin={scale(0.3)} borderRadius={5} />
          ))
        ) : (
          <EmptyImagesBox
            size={15}
            height={'33%'}
            margin={scale(0.3)}
            borderRadius={5}
          />
        )}
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
    padding: scale(6),
    marginHorizontal: 20,
    width: '100%',
  },

  boxConatainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    height: '100%',
  },
});
