import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Homepage from './src/pages/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyPage from './src/pages/myPage';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();

function HomeStackRouter() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Homepage"
                component={Homepage}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default function Router() {
    const Tab = createMaterialTopTabNavigator();
    return (
        <>
            <View style={{ paddingTop: 20 }} />
            <StatusBar style="dark" />
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeStackRouter} />
                    <Tab.Screen name="myPage" component={MyPage} />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    );
}
