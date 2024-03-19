import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import SaveImage from '../atoms/SaveImage';

const SaveImages = () => {
    return (
        <View style={styles.container}>
            <SaveImage />
        </View>
    );
};

export default SaveImages;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
