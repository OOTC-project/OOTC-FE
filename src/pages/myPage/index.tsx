import { Button, ImageBackground, View } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import ProfileBox from '../../components/organism/ProfileBox';
import EventBox from '../../components/organism/EventBox';
import SaveImages from '../../components/organism/SaveImages';
import OotdPage from '../home';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const MyPage = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const openModal = () => {
    navigation.navigate('MyModal');
  };

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
        <Button onPress={openModal} title="Open Modal" />
      </ImageBackground>
    </View>
  );
};

export default MyPage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#2b2929' },
  marginTop: { marginBottom: 40 },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
