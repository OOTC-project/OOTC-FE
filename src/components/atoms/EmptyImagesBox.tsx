import {
  View,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  DimensionValue,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface EmptyImagesBoxProps {
  height: DimensionValue;
  margin?: number;
  borderRadius: number;
  size: number;
  onPress?: () => void;
}

const EmptyImagesBox = ({
  height,
  margin,
  borderRadius,
  size,
  onPress,
}: EmptyImagesBoxProps) => {
  const containerStyle: Partial<ViewStyle> = {
    height,
    margin,
    borderRadius,
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
