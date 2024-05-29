import { Button, Image, ImageBackground, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import ProfileBox from '../../components/organism/ProfileBox';
import EventBox from '../../components/organism/EventBox';
import SaveImages from '../../components/organism/SaveImages';
import OotdPage from '../select';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { scale } from '../../utils/styleGuide';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginPage from '../login';

const MyPage = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const image = { uri: 'https://ifh.cc/g/NqpJCd.jpg' };
  const [token, setToken] = useState<string | null>(null);

  const fetchToken = async () => {
    try {
      const token = await AsyncStorage.getItem('@user_token');
      setToken(token);
    } catch (error) {
      console.error('Error fetching token', error);
    }
  };

  useEffect(() => {
    fetchToken().then(() => {
      if (!token) {
        // navigation.navigate('LoginPage');
      }
    });
  }, [token]);

  console.log(token === null);
  console.log(token);

  return (
    <>
      {token === null ? (
        <LoginPage />
      ) : (
        <View style={styles.container}>
          <ImageBackground
            source={image}
            style={styles.background}
            resizeMode="cover"
          />
          <SafeAreaView
            style={{
              backgroundColor: '#ffffffbd',
            }}
          />
          <ProfileBox height={120} />
          <EventBox height={120} />
          <SaveImages />
        </View>
      )}
    </>
  );
};

export default MyPage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#2b2929' },
  marginTop: { marginBottom: scale(10) },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});
