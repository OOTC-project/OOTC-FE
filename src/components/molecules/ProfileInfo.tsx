import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import LevelBox from './LevelBox';

const ProfileInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ProfileInfo</Text>
      <LevelBox />
    </View>
  );
};

export default ProfileInfo;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
  },
  text: {
    color: '#2b2929',
    fontWeight: '600',
    fontSize: 16,
  },
});
