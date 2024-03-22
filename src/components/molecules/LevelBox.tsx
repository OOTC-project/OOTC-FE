import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const LevelBox = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>일반회원</Text>
        </View>
    );
};

export default LevelBox;

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2b2929',
        borderRadius: 10,
        width: 70,
        height: 25,
    },
    text: {
        color: '#fff',
    },
});
