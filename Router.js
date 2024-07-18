import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyPage from './src/components/pages/myPage';
import Main from './src/components/pages/main';
import Home from './src/components/pages/home';
import LoginPage from './src/components/pages/login';
import SignUpPage from './src/components/pages/signUp';
import FindPage from './src/components/template/FindPage';
import ModifyPage from './src/components/template/ModifyPage';
import OotcPage from './src/components/pages/select';

const Stack = createNativeStackNavigator();

function OotcStackRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Ootc"
        component={OotcPage}
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
      initialRouteName="MAIN"
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: 'gray',
        tabBarShowLabel: false,
      }}
      screenOptions={{
        tabBarStyle: { backgroundColor: '#000' },
        unmountOnBlur: true,
      }}
    >
      <Tab.Screen
        name="MAIN"
        component={Main}
        options={{
          headerShown: false,
          tabBarLabel: 'MAIN',
          tabBarIcon: ({ color, size }) => (
            <Icons name="robot" color={color} size={18} />
          ),
        }}
      />
      <Tab.Screen
        name="OOTC"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'OOTC',
          tabBarIcon: ({ color, size }) => (
            <Icon name="playlist-add-check" color={color} size={27} />
          ),
        }}
      />
      <Tab.Screen
        name="ITEMS"
        component={OotcStackRouter}
        options={{
          headerShown: false,
          tabBarLabel: 'ITEMS',
          tabBarIcon: ({ color, size }) => (
            <Icons name="tshirt" color={color} size={18} />
          ),
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPageStackRouter}
        options={{
          headerShown: false,
          tabBarLabel: 'MY',
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
        <Stack.Screen
          name="ModifyPage"
          component={ModifyPage}
          options={{ presentation: 'modal', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
