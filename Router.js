import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import OotdPage from './src/pages/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyPage from './src/pages/myPage';
import { View } from 'react-native';
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
                    contentStyle: { backgroundColor: '#000000' },
                }}
            />
        </Stack.Navigator>
    );
}

export default function Router() {
    const Tab = createMaterialTopTabNavigator();
    return (
        <>
            <View style={{ paddingTop: 20 }} />
            <StatusBar style="light" />
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={{
                        tabBarActiveTintColor: '#FFFFFF',
                        tabBarInactiveTintColor: 'gray',
                        tabBarIndicatorStyle: {
                            backgroundColor: '#FFFFFF',
                        },
                        tabBarStyle: {
                            backgroundColor: '#000000',
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
