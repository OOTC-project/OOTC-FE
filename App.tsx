import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/slice';
import { SafeAreaProvider } from 'react-native-safe-area-context'; // SafeAreaProvider import 추가
import Router from './Router';

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Router />
      </Provider>
    </SafeAreaProvider>
  );
}
