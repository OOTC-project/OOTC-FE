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
  borderRadius: number;
}

const ImageBox = ({ borderRadius }: ImageBoxProps) => {
  const containerStyle: any = {
    borderRadius,
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Image
        source={{
          uri: 'https://i.ibb.co/KXZY4ZY/mojtaba-mosayebzadeh-kc-Ztpg-Tm0og-unsplash.jpg',
        }}
        style={{
          width: screenWidth / 20,
          height: screenWidth / 20,
          borderRadius: 3,
          margin: 1,
        }}
      />
    </View>
  );
};

export default ImageBox;

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: '33.3%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
});
