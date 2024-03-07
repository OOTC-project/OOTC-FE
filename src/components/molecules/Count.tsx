import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Count = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>1</Text>
        </View>
    );
};

export default Count;

const styles = StyleSheet.create({
    container: {
        width: 20,
        height: 20,
        backgroundColor: '#a71c1c',
        position: 'absolute',
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        right: 0,
        transform: [{ translateY: -7 }],
    },
    text: {
        color: '#fff',
        fontWeight: '800',
    },
});
