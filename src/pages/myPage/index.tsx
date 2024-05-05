import { Button, Image, ImageBackground, View } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import ProfileBox from '../../components/organism/ProfileBox';
import EventBox from '../../components/organism/EventBox';
import SaveImages from '../../components/organism/SaveImages';
import OotdPage from '../home';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { scale } from '../../utils';

const MyPage = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const image = require('../../../assets/bg.png');

  const openModal = () => {
    navigation.navigate('LoginPage');
  };

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.background} resizeMode="cover" />
      <View style={styles.marginTop} />
      <ProfileBox height={120} />
      <EventBox height={120} />
      <SaveImages />
      <Button onPress={openModal} title="Open Modal" />
    </View>
  );
};

export default MyPage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#2b2929' },
  marginTop: { marginBottom: scale(40) },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});
