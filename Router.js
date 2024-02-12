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
                    swipeEnabled={false}
                    tabBarOptions={{
                        activeTintColor: '#FFFFFF',
                        inactiveTintColor: 'gray',
                        style: { backgroundColor: '#000000' },
                        indicatorStyle: { backgroundColor: '#FFFFFF' },
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
