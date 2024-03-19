import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

interface ProfileImageProps {
    width?: number;
    height?: number;
    image?: any;
}

const ProfileImage = ({ width, height, image }: ProfileImageProps) => {
    console.log(image);

    return (
        <View style={[styles.container, { width, height }]}>
            {image ? (
                <Image
                    source={{ uri: image }}
                    style={styles.image}
                    resizeMode="cover"
                />
            ) : (
                <Text style={styles.Text}>+</Text>
            )}
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
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
    },
});
