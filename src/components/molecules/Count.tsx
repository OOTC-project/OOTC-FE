import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducer';
import { COLOR } from '../../layout/default';

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
    backgroundColor: COLOR.red,
    position: 'absolute',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    right: 0,
    transform: [{ translateY: -7 }],
  },
  text: {
    color: COLOR.black,
    fontWeight: '800',
  },
});
