import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImagePickerExample = () => {
    const [image, setImage] = useState('');

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (result.assets && !result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={pickImage}>
                <Text style={styles.buttonText}>사진 올리기</Text>
            </TouchableOpacity>
            <View style={styles.imageContainer}>
                {image !== '' && (
                    <Image
                        source={{ uri: image }}
                        style={styles.image}
                        resizeMode="contain"
                    />
                )}
            </View>
        </View>
    );
};

export default ImagePickerExample;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#000',
        padding: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 13,
        marginBottom: 20,
        height: 60,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    imageContainer: {
        width: '100%',
        aspectRatio: 4 / 3, // Aspect ratio for 4:3 aspect
        borderWidth: 1,
        borderColor: '#070707',
        borderRadius: 13,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 13,
    },
});
