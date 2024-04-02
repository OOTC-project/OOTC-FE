import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import OotdPage from './src/pages/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyPage from './src/pages/myPage';
import Select from './src/pages/select';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();

function OotdStackRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Ootd"
        component={OotdPage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function Router() {
  const Tab = createBottomTabNavigator(); // 변경된 부분

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: 'gray',
          tabBarShowLabel: false,
        }}
        screenOptions={{
          tabBarStyle: { backgroundColor: '#000' },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Select}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={24} /> // 예시 아이콘 사용
            ),
          }}
        />

        <Tab.Screen
          name="Details"
          component={OotdStackRouter}
          options={{
            headerShown: false,
            tabBarLabel: 'Details',
            tabBarIcon: ({ color, size }) => (
              <Icon name="notifications" color={color} size={24} /> // 예시 아이콘 사용
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={MyPage}
          options={{
            headerShown: false,
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Icon name="person" color={color} size={24} /> // 예시 아이콘 사용
            ),
          }}
        />

        <Tab.Screen
          name="Explore"
          component={Select}
          options={{
            headerShown: false,
            tabBarLabel: 'Explore',
            tabBarIcon: ({ color, size }) => (
              <Icon name="explore" color={color} size={24} /> // 예시 아이콘 사용
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
