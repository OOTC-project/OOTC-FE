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
        source={require('../../../assets/naver_logo.png')}
        style={{ width: '100%', height: '100%' }}
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
