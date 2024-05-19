import { View, Text, StyleSheet, Animated } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
interface SnackBarProps {
  children?: React.ReactNode;
  snackbarVisible: boolean;
}

const SnackBar = ({ children, snackbarVisible }: SnackBarProps) => {
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (snackbarVisible) {
      Animated.timing(scaleValue, {
        toValue: 0.8,
        duration: 20,
        useNativeDriver: true,
      }).start();
    } else {
      scaleValue.setValue(0);
    }
  }, [snackbarVisible, scaleValue]);
  return (
    <Animated.View
      style={[styles.container, { transform: [{ scale: scaleValue }] }]}
    >
      <Text style={styles.text}>{children}</Text>
    </Animated.View>
  );
};

export default SnackBar;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: 16,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#212121',
    borderRadius: 20,
  },
  text: { fontSize: 18, color: '#fff' },
});
