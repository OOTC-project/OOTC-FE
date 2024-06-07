import { View, Text, Dimensions, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import ImageBox from '../atoms/ImagesBox';
import { moderateScale, scale } from '../../utils/styleGuide';
import EmptyImagesBox from '../atoms/EmptyImagesBox';

const ImageBoxContainer = () => {
  return (
    <View style={styles.container}>
      {true ? (
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 1, 1, 1].slice(0, 9)}
          numColumns={3}
          contentContainerStyle={{
            justifyContent: 'center',
          }}
          renderItem={({ item }) => <ImageBox borderRadius={5} />}
        />
      ) : (
        <EmptyImagesBox
          size={15}
          height={'33%'}
          margin={scale(0.3)}
          borderRadius={5}
        />
      )}
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
    borderRadius: 12,
    padding: scale(4),
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
});
