import { View, StyleSheet, Image } from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/AntDesign';
import { COLOR } from '../../layout/default';

interface ProfileImageProps {
  width?: number;
  height?: number;
  image: string;
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
        <>{height && <Icons name="user" color="#fff" size={height / 2.5} />}</>
      )}
    </View>
  );
};

export default ProfileImage;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.black,
    opacity: 0.7,
    borderRadius: 100,
    margin: 5,
    marginHorizontal: 10,
  },
  Text: {
    color: COLOR.white,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
});
