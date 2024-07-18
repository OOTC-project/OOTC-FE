import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Theme, { scale } from '../../utils/styleGuide';

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
    width: Theme.width * 80,
    margin: Theme.height * 20,
  },
  text: {
    flexWrap: 'nowrap',
    textDecorationLine: 'underline',
    fontSize: Theme.fontSizes.fontSizes12,
    fontWeight: 'bold',
  },
});
