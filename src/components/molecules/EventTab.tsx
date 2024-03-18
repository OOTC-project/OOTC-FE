import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

interface EventTabProps {
    children?: React.ReactNode;
}

const EventTab = ({ children }: EventTabProps) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    );
};

export default EventTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: { color: '#fff' },
});
