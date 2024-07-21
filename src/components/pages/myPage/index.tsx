import { ImageBackground, View } from 'react-native';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import { useQuery } from 'react-query';
import { COLOR } from '../../../layout/default';
import { scale } from '../../../utils/styleGuide';
import { GetUserInfo } from '../../../api/auth';
import { GetCody } from '../../../api/service';
import { setAccessToken } from '../../../redux/slice/userSlice';
import { RootState } from '../../../redux/reducer';
import { RootStackParamList } from '../../../types';
import ProfileBox from '../../organism/ProfileBox';
import EventBox from '../../organism/EventBox';
import SaveImages from '../../organism/SaveImages';
import LoadingSpinner from '../../atoms/Loading';

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

  useEffect(() => {
    fetchToken();
  }, []);

  useFocusEffect(() => {
    if (token === null) {
      navigation.navigate('LoginPage');
    }
  });

  const { data } = useQuery('GetCody', () => GetCody({}), {
    retry: 0,
    onSuccess: e => {},
  });

  const { data: infoData } = useQuery('GetUserInfo', () => GetUserInfo({}), {
    enabled: !!token,
    // onSuccess: e => {
    //   console.log(e);
    // },
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        style={styles.background}
        resizeMode="cover"
      />
      {token ? (
        // {token && infoData && infoData.data.id ? (
        <>
          <ProfileBox height={120} infoData={infoData} />
          <EventBox height={120} />
          <SaveImages data={data} />
        </>
      ) : (
        <View style={styles.nodata}>
          <LoadingSpinner />
        </View>
      )}
    </View>
  );
};

export default MyPage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLOR.black },
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
