import { Image, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

interface ImageBoxProps {
  borderRadius: number;
  size: number;
  data: number;
}

const ImageBox = ({ borderRadius, size, data }: ImageBoxProps) => {
  const [index, setIndex] = useState(data);

  useEffect(() => {
    const randomSpeed = Math.floor(Math.random() * 3000) + 1000;
    const interval = setInterval(() => {
      setIndex(prevIndex => prevIndex + 1);
    }, randomSpeed);

    return () => clearInterval(interval);
  }, []);

  const images = [
    'https://i.ibb.co/YLgfC1R/ryan-hoffman-A7f7-XRKg-UWc-unsplash.jpg',
    'https://i.ibb.co/KXZY4ZY/mojtaba-mosayebzadeh-kc-Ztpg-Tm0og-unsplash.jpg',
    'https://i.ibb.co/VDWPYvw/alex-haigh-f-Et6-Wd4t4j0-unsplash.jpg',
    'https://i.ibb.co/k4Jqjdh/andre-styles-fw-Dln-TM-DJo-unsplash.jpg',
  ];

  return (
    <Image
      source={{
        uri: images[index % images.length],
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
