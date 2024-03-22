import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import OotdPage from './src/pages/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyPage from './src/pages/myPage';
import { SafeAreaView, Text, View } from 'react-native';
import Select from './src/pages/select';

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
    const Tab = createMaterialTopTabNavigator();
    return (
        <>
            <StatusBar style="light" />
            <SafeAreaView />
            <NavigationContainer>
                <Tab.Navigator
                    swipeEnabled={false}
                    screenOptions={{
                        tabBarActiveTintColor: '#FFFFFF',
                        tabBarInactiveTintColor: 'gray',
                        tabBarIndicatorStyle: {
                            backgroundColor: '#FFFFFF',
                        },
                        tabBarStyle: {
                            backgroundColor: 'transparent', // 배경색을 투명하게 설정
                            borderTopWidth: 0, // 탭 바 위에 경계선 제거
                        },
                    }}
                >
                    <Tab.Screen name="Select" component={Select} />
                    <Tab.Screen name="Ootd" component={OotdStackRouter} />
                    <Tab.Screen name="myPage" component={MyPage} />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    );
}
