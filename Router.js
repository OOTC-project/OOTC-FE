import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Home from './src/components/pages/home';
import OotcPage from './src/components/pages/select';
import MyPage from './src/components/pages/myPage';
import Main from './src/components/pages/main';
import LoginPage from './src/components/pages/login';
import SignUpPage from './src/components/pages/signUp';
import FindPage from './src/components/template/FindPage';
import ModifyPage from './src/components/template/ModifyPage';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

function OotcItemsTabNavigator() {
  return (
    <TopTab.Navigator
      initialRouteName="OOTC"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarIndicatorStyle: { backgroundColor: '#000' },
        tabBarStyle: { display: 'none' },
        tabBarLabelStyle: { display: 'none' },
      }}
    >
      <TopTab.Screen
        name="OOTC"
        component={Home}
        options={{
          tabBarLabel: 'OOTC',
          tabBarLabel: () => null,
        }}
      />
      <TopTab.Screen
        name="ITEMS"
        component={OotcPage}
        options={{
          tabBarLabel: 'ITEMS',
          tabBarLabel: () => null,
        }}
      />
    </TopTab.Navigator>
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

function RootNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="MAIN"
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#000' },
      }}
    >
      <BottomTab.Screen
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
      <BottomTab.Screen
        name="OOTC_ITEMS"
        component={OotcItemsTabNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'OOTC',
          tabBarIcon: ({ color, size }) => (
            <Icons name="tshirt" color={color} size={18} />
          ),
        }}
      />
      <BottomTab.Screen
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
    </BottomTab.Navigator>
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
