import { View, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { scale, verticalScale } from '../../utils/styleGuide';
import EmptyImagesBox from '../atoms/EmptyImagesBox';
import ImageBox from '../atoms/ImagesBox';
import { COLOR } from '../../layout/default';

interface ImageBoxContainerProps {
  data?: any;
}

const ImageBoxContainer = ({ data }: ImageBoxContainerProps) => {
  const imageSize = verticalScale(65);

  return (
    <View style={styles.container}>
      {data && data.clothes.length > 0 ? (
        <FlatList
          data={data.clothes}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.flatListContent}
          renderItem={({ item }) => {
            return (
              <>
                {item ? (
                  <ImageBox
                    borderRadius={5}
                    size={imageSize}
                    data={data.clothes}
                  />
                ) : null}
              </>
            );
          }}
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
    backgroundColor: COLOR.black,
    borderRadius: 12,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: COLOR.black,
  },
  flatListContent: {
    justifyContent: 'center',
  },
});
