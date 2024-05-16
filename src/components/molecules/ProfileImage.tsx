import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

interface ProfileImageProps {
  width?: number;
  height?: number;
  image?: string;
}

const ProfileImage = ({ width, height, image }: ProfileImageProps) => {
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
    backgroundColor: '#000',
    opacity: 0.7,
    borderRadius: 100,
    margin: 5,
    marginHorizontal: 10,
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
