import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface EmptyImagesBoxProps {
  height: string;
  margin?: number | undefined;
  borderRadius: number;
  size: number;
  onPress?: () => void;
}

const EmptyImagesBox = ({
  height,
  margin = undefined,
  borderRadius,
  size,
  onPress,
}: EmptyImagesBoxProps) => {
  const containerStyle: any = {
    height,
    margin,
    borderRadius,
    size,
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity onPress={onPress}>
        <AntDesign name="pluscircle" size={size} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default EmptyImagesBox;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '32%',
    flexDirection: 'column',
  },
});
