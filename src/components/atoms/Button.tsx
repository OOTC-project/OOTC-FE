import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Button = ({
  children,
  color,
  backgroundColor,
  fontSize,
  text,
  borderRadius,
}: any) => {
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
    marginTop: 10,
    paddingVertical: 15,
    borderRadius: 8,
  },
  button: {},
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
