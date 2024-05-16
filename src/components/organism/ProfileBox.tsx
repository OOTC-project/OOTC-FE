import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import ProfileImage from '../molecules/ProfileImage';
import ProfileInfo from '../molecules/ProfileInfo';
import * as ImagePicker from 'expo-image-picker';

interface ProfileBoxProps {
  width?: number;
  height?: number;
}
const ProfileBox = ({ width, height }: ProfileBoxProps) => {
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
    <View style={styles.container}>
      <View style={[styles.box, { width }]}>
        <TouchableOpacity onPress={pickImage}>
          <ProfileImage
            height={height ? height - 10 : 0}
            width={height ? height - 10 : 0}
            image={image}
          />
        </TouchableOpacity>
        <ProfileInfo />
      </View>
    </View>
  );
};

export default ProfileBox;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
  },
});
