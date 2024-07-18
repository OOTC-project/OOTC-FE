import { StyleSheet, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { COLOR } from '../../layout/default';

interface SnackBarProps {
  children?: React.ReactNode;
  position?: number;
  size?: number;
  snackbarVisible: boolean;
}

const SnackBar = ({
  children,
  snackbarVisible,
  position = 0,
  size,
}: SnackBarProps) => {
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (snackbarVisible) {
      Animated.timing(scaleValue, {
        toValue: size ? size : 0.8,
        duration: 120,
        useNativeDriver: true,
      }).start();
    } else {
      scaleValue.setValue(0);
    }
  }, [snackbarVisible, scaleValue]);

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ scale: scaleValue }], bottom: position },
      ]}
    >
      {children}
    </Animated.View>
  );
};

export default SnackBar;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    margin: 10,
    padding: 10,
    alignItems: 'center',
    backgroundColor: COLOR.black,
    borderRadius: 20,
  },
});
