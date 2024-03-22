import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Count = () => {
    const { counter: itemCounter } = useSelector((state: RootState) => state);

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        let count = 0;

        if (itemCounter.outer !== null) {
            count++;
        }
        if (itemCounter.top !== null) {
            count++;
        }
        if (itemCounter.bottom !== null) {
            count++;
        }
        setCounter(count);
    }, [itemCounter]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{counter}</Text>
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
        color: '#2b2929',
        fontWeight: '800',
    },
});
