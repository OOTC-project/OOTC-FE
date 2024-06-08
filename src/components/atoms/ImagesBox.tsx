import { Image, StyleSheet, Dimensions } from 'react-native';
import React from 'react';

interface ImageBoxProps {
  borderRadius: number;
  size: number;
}

const ImageBox = ({ borderRadius, size }: ImageBoxProps) => {
  return (
    <Image
      source={{
        uri: 'https://i.ibb.co/KXZY4ZY/mojtaba-mosayebzadeh-kc-Ztpg-Tm0og-unsplash.jpg',
      }}
      style={[
        styles.image,
        {
          borderRadius,
          width: size,
          height: size,
        },
      ]}
    />
  );
};

export default ImageBox;

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
  },
});
