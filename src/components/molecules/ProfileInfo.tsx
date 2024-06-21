import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import LevelBox from './LevelBox';
import { scale } from '../../utils/styleGuide';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  CommonActions,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setAccessToken } from '../../redux/slice/userSlice';
import { RootStackParamList } from '../../types';

const ProfileInfo = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();

  const removeToken = async () => {
    try {
      await AsyncStorage.removeItem('@user_token');
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Ootd' }],
        }),
      );
      dispatch(setAccessToken(null));
    } catch (error) {
      console.error('token애러', error);
    }
  };

  const handleLogout = () => {
    Alert.alert(
      '로그아웃',
      '정말 로그아웃 하시겠습니까?',
      [
        { text: '취소', style: 'cancel' },
        { text: '확인', onPress: removeToken },
      ],
      { cancelable: false },
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>ProfileInfo</Text>
      <LevelBox />
      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.logout}>로그아웃</Text>
      </TouchableOpacity>
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
    color: '#a02e2e',
    fontWeight: '600',
    fontSize: 12,
    margin: 5,
  },
});
