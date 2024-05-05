import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { scale } from '../../utils';

interface ButtonProps {
  children?: React.ReactNode;
  color?: string;
  backgroundColor?: string;
  fontSize?: number;
  text?: string;
  borderRadius?: number;
}

const Button = ({
  children,
  color,
  backgroundColor,
  fontSize,
  text,
  borderRadius,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor, borderRadius }]}
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
  },
  button: {},
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
