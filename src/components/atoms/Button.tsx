import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Theme, { scale } from '../../utils/styleGuide';
import { COLOR } from '../../layout/default';

interface ButtonProps {
  children?: React.ReactNode;
  color?: string;
  backgroundColor?: string;
  fontSize?: number;
  text?: string;
  borderRadius?: number;
  disabled?: boolean;
  onPress?: () => void;
  width?: number;
}

const Button = ({
  children,
  color,
  backgroundColor,
  fontSize,
  text,
  borderRadius,
  disabled,
  onPress,
  width,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      // disabled={disabled}s
      style={[styles.container, { backgroundColor, borderRadius, width }]}
    >
      <View style={styles.button}>
        {children}
        {text && (
          <Text style={[styles.buttonText, { color, fontSize }]}>{text}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: scale(10),
    paddingVertical: scale(10),
    borderRadius: 8,
    height: Theme.height * 50,
  },
  button: {},
  buttonText: {
    color: COLOR.white,
    fontWeight: 'bold',
  },
});
