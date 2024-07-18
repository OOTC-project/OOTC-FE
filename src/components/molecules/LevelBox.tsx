import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { COLOR } from '../../layout/default';
import Theme from '../../utils/styleGuide';

const LevelBox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>일반회원</Text>
    </View>
  );
};

export default LevelBox;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.black,
    borderRadius: 10,
    width: 70,
    height: 25,
  },
  text: {
    color: COLOR.white,
    fontSize: Theme.fontSizes.fontSizes12,
  },
});
