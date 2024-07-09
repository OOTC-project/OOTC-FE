import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Platform,
  Keyboard,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import MySafeAreaView from '../atoms/MySafeAreaView';

interface ImagePickerExampleProps {
  photoData?: {
    name: string;
    url: string;
    position: string;
    tag?: string;
    des?: string;
  };
  setPhotoData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      url: string;
      position: string;
      tag?: string;
      des?: string;
    }>
  >;
  height?: number;
  width?: number | boolean;
}

const ImagePickerExample = ({
  photoData,
  setPhotoData,
  height,
  width,
}: ImagePickerExampleProps) => {
  const [image, setImage] = useState('');
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: width ? [4, 3] : [3, 4],
      quality: 1,
    });

    if (result.assets && !result.canceled) {
      setImage(result.assets[0].uri);
      setPhotoData(prevData => ({
        ...prevData,
        url: result.assets ? result.assets[0].uri : '',
      }));
    }
  };

  return (
    <View>
      {!keyboardVisible && (
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Text style={styles.buttonText}>사진 올리기</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={pickImage}>
        <View style={[styles.imageContainer, { height: height }]}>
          {image !== '' ? (
            <Image
              source={{ uri: image }}
              style={styles.image}
              resizeMode="contain"
            />
          ) : (
            <View style={styles.addImage}>
              <Text style={styles.addText}>+</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ImagePickerExample;

const styles = StyleSheet.create({
  button: {
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
  addImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  addText: { fontSize: 20, color: '#fff' },
  imageContainer: {
    width: '100%',
    // aspectRatio: 4 / 3,
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
