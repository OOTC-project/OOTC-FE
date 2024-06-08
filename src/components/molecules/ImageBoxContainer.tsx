import { View, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { scale, verticalScale } from '../../utils/styleGuide';
import EmptyImagesBox from '../atoms/EmptyImagesBox';
import ImageBox from '../atoms/ImagesBox';

const ImageBoxContainer = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].slice(0, 9);
  const imageSize = verticalScale(65);

  return (
    <View style={styles.container}>
      {data.length > 0 ? (
        <FlatList
          data={data}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.flatListContent}
          renderItem={({ item }) => (
            <ImageBox borderRadius={5} size={imageSize} data={item} />
          )}
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111111',
    borderRadius: 12,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: '#3c3c3c',
  },
  flatListContent: {
    justifyContent: 'center',
  },
});
