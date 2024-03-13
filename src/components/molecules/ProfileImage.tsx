import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

interface ProfileImageProps {
    width?: number;
    height?: number;
}

const ProfileImage = ({ width, height }: ProfileImageProps) => {
    return (
        <View style={[styles.container, { width, height }]}>
            <Text style={styles.Text}>OOTD</Text>
        </View>
    );
};

export default ProfileImage;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#959595df',
        borderRadius: 100,
        margin: 5,
    },
    Text: {
        color: '#fff',
    },
});
