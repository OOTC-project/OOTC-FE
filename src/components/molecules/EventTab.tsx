import { Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { COLOR } from '../../layout/default';
import Theme from '../../utils/styleGuide';

interface EventTabProps {
  children?: React.ReactNode;
}

const EventTab = ({ children }: EventTabProps) => {
  const handlePress = () => {
    Alert.alert(
      '',
      'version 1.1에서 만나요 :)',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      { cancelable: false },
    );
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default EventTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: COLOR.black,
    fontWeight: '700',
    fontSize: Theme.fontSizes.fontSizes14,
  },
});
