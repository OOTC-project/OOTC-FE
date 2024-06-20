import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducer';

const Count = () => {
  const { counter: itemCounter } = useSelector((state: RootState) => state);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{itemCounter.length}</Text>
    </View>
  );
};

export default Count;

const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    backgroundColor: '#a71c1c',
    position: 'absolute',
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    right: 0,
    transform: [{ translateY: -7 }],
  },
  text: {
    color: '#2b2929',
    fontWeight: '800',
  },
});
