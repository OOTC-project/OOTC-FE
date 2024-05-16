import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import LevelBox from './LevelBox';
import { scale } from '../../utils/styleGuide';

const ProfileInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>ProfileInfo</Text>
      <LevelBox />
      <Text style={styles.logout}>로그아웃</Text>
    </View>
  );
};

export default ProfileInfo;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginLeft: 15,
    marginBottom: 5,
  },
  name: {
    color: '#2b2929',
    fontWeight: '600',
    fontSize: scale(18),
  },

  logout: {
    color: '#2b2929',
    fontWeight: '600',
    fontSize: 12,
    margin: 5,
  },
});
