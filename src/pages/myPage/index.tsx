import { ImageBackground, View } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import ProfileBox from '../../components/organism/ProfileBox';
import EventBox from '../../components/organism/EventBox';
import SaveImages from '../../components/organism/SaveImages';
import OotdPage from '../home';

const MyPage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/backGround/default.png')}
        style={styles.background}
      >
        <View style={styles.marginTop} />
        <ProfileBox height={120} />
        <EventBox height={120} />
        <SaveImages />
      </ImageBackground>
    </View>
  );
};

export default MyPage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#2b2929' },
  marginTop: { marginBottom: 20 },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
