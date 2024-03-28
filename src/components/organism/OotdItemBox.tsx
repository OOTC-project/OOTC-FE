import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

interface OotdItemBoxProps {
  width?: number;
  height?: number;
  children?: React.ReactNode;
}

const OotdItemBox = ({ width, height, children }: OotdItemBoxProps) => {
  return (
    <View
      style={[
        styles.container,
        {
          width: width || screenWidth / 1.5,
          height: height || screenHeight / 4,
        },
      ]}
    >
      {children}
    </View>
  );
};

export default OotdItemBox;

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    opacity: 0.7,
    borderRadius: 18,
    padding: 5,
    marginTop: 10,
    borderColor: '#2e2e2e',
    backgroundColor: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
});
