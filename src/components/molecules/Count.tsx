import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Count = () => {
    const items = useSelector((state: RootState) => state);

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        let count = 0;

        if (items.counter.outer !== null) {
            count++;
        }
        if (items.counter.top !== null) {
            count++;
        }
        if (items.counter.bottom !== null) {
            count++;
        }
        setCounter(count);
    }, [items.counter]);

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
        color: '#fff',
        fontWeight: '800',
    },
});
