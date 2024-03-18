import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const SaveImage = ({ index }: any) => {
    return (
        <View style={styles.container}>
            <Text>{index}</Text>
        </View>
    );
};

export default SaveImage;

const styles = StyleSheet.create({
    container: {
        height: 300,
        borderRadius: 20,
        padding: 5,
        marginTop: 10,
        marginBottom: 5,
        backgroundColor: 'gray',
    },
});
