import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/slice';
import { SafeAreaProvider } from 'react-native-safe-area-context'; // SafeAreaProvider import 추가
import Router from './Router';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <Provider store={store}>
          <Router />
        </Provider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
