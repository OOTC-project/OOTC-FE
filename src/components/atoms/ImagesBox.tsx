import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ViewStyle,
} from 'react-native';
import React from 'react';

interface ImageBoxProps {
  height: string;
  margin?: number | undefined;
  borderRadius: number;
}

const ImageBox = ({
  height,
  margin = undefined,
  borderRadius,
}: ImageBoxProps) => {
  const containerStyle: any = {
    height,
    margin,
    borderRadius,
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Image
        source={{
          uri: 'https://i.ibb.co/KXZY4ZY/mojtaba-mosayebzadeh-kc-Ztpg-Tm0og-unsplash.jpg',
        }}
        style={{ width: '80%', height: '80%', borderRadius: 3 }}
      />
    </View>
  );
};

export default ImageBox;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '32%',
    flexDirection: 'column',
  },
});
