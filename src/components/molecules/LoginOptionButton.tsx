import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Theme from '../../utils/styleGuide';

interface LoginOptionButtonProps {
  title?: string;
  onPress?: () => void;
}

const LoginOptionButton = ({ title, onPress }: LoginOptionButtonProps) => {
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
    width: Theme.width * 0.8,
    margin: Theme.height * 0.02,
  },
  text: {
    textDecorationLine: 'underline',
    fontSize: Theme.fontSizes.fontSizes12,
    fontWeight: 'bold',
  },
});
