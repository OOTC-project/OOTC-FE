import { Image, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

interface ImageBoxProps {
  borderRadius: number;
  size: number;
  data: {
    id: number;
    name: string;
    clothesImg: string;
    description: string;
    position: string;
    fkCategoryId: number;
    fkMemberId: number;
    createdAt: string;
  }[];
}

const ImageBox = ({ borderRadius, size, data }: ImageBoxProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const randomSpeed = Math.floor(Math.random() * 3000) + 1000;
    const interval = setInterval(() => {
      setIndex(prevIndex => {
        let newIndex = Math.floor(Math.random() * data.length);
        while (newIndex === prevIndex) {
          newIndex = Math.floor(Math.random() * data.length);
        }
        return newIndex;
      });
    }, randomSpeed);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <Image
      source={{
        uri: data[index].clothesImg,
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
