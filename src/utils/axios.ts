import axios, { AxiosInstance, AxiosRequestHeaders } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions, useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setAccessToken } from '../redux/slice/userSlice';

axios.defaults.withCredentials = true;
const instance: AxiosInstance = axios.create();

instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('@user_token');

    if (token) {
      if (config.headers) {
        (config.headers as AxiosRequestHeaders).Authorization =
          `Bearer ${token}`;
      } else {
        config.headers = {
          Authorization: `Bearer ${token}`,
        } as AxiosRequestHeaders;
      }
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      const dispatch = useDispatch();
      dispatch(setAccessToken(null));
      AsyncStorage.removeItem('@user_token');

      const navigation = useNavigation();
      navigation.dispatch(StackActions.replace('LoginPage'));
    }
    return Promise.reject(error);
  },
);

export default instance;
