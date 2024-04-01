import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import OotdPage from './src/pages/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MyPage from './src/pages/myPage';
import { SafeAreaView, Text, View } from 'react-native';
import Select from './src/pages/select';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
  const Tab = createMaterialBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#fff',
          tabStyle: {
            backgroundColor: '#009387',
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Select}
          options={{
            tabBarLabel: 'Home',
            tabBarColor: '#009387',
            tabBarIcon: ({ color, size }) => (
              <Icon name="notifications" color={color} size={24} />
            ),
          }}
        />

        <Tab.Screen
          name="Details"
          component={Select}
          options={{
            tabBarLabel: 'Details',
            tabBarColor: '#1f65ff',
            tabBarIcon: ({ color, size }) => (
              <Icon name="notifications" color={color} size={24} />
            ),
            tabBarBadge: 3,
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Select}
          options={{
            tabBarLabel: 'Profile',
            tabBarColor: '#694fad',
            tabBarIcon: ({ color, size }) => (
              <Icon name="notifications" color={color} size={24} />
            ),
          }}
        />

        <Tab.Screen
          name="Explore"
          component={Select}
          options={{
            tabBarLabel: 'Explore',
            tabBarColor: '#d02860',
            tabBarIcon: ({ color, size }) => (
              <Icon name="notifications" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
      {/* <Tab.Navigator
        initialRouteName="Home"
        barStyle={{ backgroundColor: '#000' }}
        activeColor="#fff"
      >
        <Tab.Screen
          name="Home"
          component={Select}
          options={{
            tabBarLabel: '홈',
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={OotdStackRouter}
          options={{
            tabBarLabel: '검색',
            tabBarIcon: ({ color }) => (
              <Icon name="notifications" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={MyPage}
          options={{
            tabBarLabel: '알림',
            tabBarIcon: ({ color }) => (
              <Icon name="search" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
}
