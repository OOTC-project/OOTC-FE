import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

interface LoginOptionButtonProp {
  title?: string;
  onPress?: () => void;
}

const LoginOptionButton = ({ title, onPress }: LoginOptionButtonProp) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default LoginOptionButton;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 110,
    padding: 10,
    margin: 10,
  },
  text: {
    flexWrap: 'nowrap',
    textDecorationLine: 'underline',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
