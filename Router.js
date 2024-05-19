import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import OotdPage from './src/pages/select';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyPage from './src/pages/myPage';
import Select from './src/pages/home';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Button } from 'react-native';
import LoginPage from './src/pages/login';
import SignUpPage from './src/pages/signUp';
import FindPage from './src/pages/signUp/findPage';

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

function MyPageStackRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyPage"
        component={MyPage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function RootNavigator() {
  return (
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
            <Icon name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Ootd"
        component={OotdStackRouter}
        options={{
          headerShown: false,
          tabBarLabel: 'Ootd',
          tabBarIcon: ({ color, size }) => (
            <Icon name="notifications" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPageStackRouter}
        options={{
          headerShown: false,
          tabBarLabel: 'MyPage',
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={RootNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ presentation: 'modal', headerShown: false }}
        />
        <Stack.Screen
          name="SignUpPage"
          component={SignUpPage}
          options={{ presentation: 'modal', headerShown: false }}
        />
        <Stack.Screen
          name="FindPage"
          component={FindPage}
          options={{ presentation: 'modal', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
