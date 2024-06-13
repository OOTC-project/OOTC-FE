import axios, { AxiosInstance, AxiosRequestHeaders } from 'axios';
import * as SecureStore from 'expo-secure-store';
import Constants from 'expo-constants';
import { NavigationProp, useNavigation } from '@react-navigation/native';

// Set up axios instance with credentials
axios.defaults.withCredentials = true;
const instance: AxiosInstance = axios.create();
const navigation = useNavigation<NavigationProp<any>>();

// Request interceptor to add token to headers
instance.interceptors.request.use(
  async config => {
    const token = await SecureStore.getItemAsync('accessToken');
    if (token) {
      // Ensure headers is an instance of AxiosRequestHeaders
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

// Response interceptor to handle token refresh
instance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = await SecureStore.getItemAsync('refreshToken');

      try {
        const { data } = await instance.post(
          `${Constants.manifest.extra.apiHost}/api/authenticate/reissue`,
          { token: refreshToken },
        );
        await SecureStore.setItemAsync('accessToken', data.data.accessToken);
        await SecureStore.setItemAsync('refreshToken', data.data.refreshToken);

        return instance(originalRequest);
      } catch (refreshError) {
        console.log(refreshError);
      }
    }
    navigation.navigate('LoginPage');

    return Promise.reject(error);
  },
);

export default instance;
