import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

interface OotdItemBoxProps {
  width?: number;
  height?: number;
  children?: React.ReactNode;
}

const OotdItemBox = ({ width, height, children }: OotdItemBoxProps) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            width: width || screenWidth / 1.3,
            height: height || screenHeight / 4,
          },
        ]}
      >
        {children}
      </View>
    </View>
  );
};

export default OotdItemBox;

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    borderColor: '#000',
    borderWidth: 4.5,
    marginTop: 5,
    marginVertical: 5,
    borderRadius: 18,
  },
  box: {
    opacity: 0.7,
    backgroundColor: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
});
