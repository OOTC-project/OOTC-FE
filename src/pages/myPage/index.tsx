import { Image, ImageBackground, View } from 'react-native';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import ProfileBox from '../../components/organism/ProfileBox';
import EventBox from '../../components/organism/EventBox';
import SaveImages from '../../components/organism/SaveImages';
import { scale } from '../../utils/styleGuide';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { setAccessToken } from '../../redux/slice/userSlice';
import { RootState } from '../../redux/reducer';
import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import { RootStackParamList } from '../../types';

const MyPage = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const image = { uri: 'https://ifh.cc/g/NqpJCd.jpg' };
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.token.accessToken);
  const fetchToken = async () => {
    try {
      const token = await AsyncStorage.getItem('@user_token');
      dispatch(setAccessToken(token));
    } catch (error) {
      console.error('Error fetching token', error);
    }
  };
  console.log(token);

  useEffect(() => {
    fetchToken();
  }, []);

  useFocusEffect(() => {
    if (token === null) {
      navigation.navigate('LoginPage');
    }
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        style={styles.background}
        resizeMode="cover"
      />
      {token ? (
        <>
          <ProfileBox height={120} />
          <EventBox height={120} />
          <SaveImages />
        </>
      ) : (
        <View style={styles.nodata}>
          <Image
            source={require('../../../assets/noData.gif')}
            style={{ width: 100, height: 100 }}
          />
        </View>
      )}
    </View>
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

  nodata: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
