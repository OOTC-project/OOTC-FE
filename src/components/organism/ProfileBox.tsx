import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import ProfileImage from '../molecules/ProfileImage';
import ProfileInfo from '../molecules/ProfileInfo';
import * as ImagePicker from 'expo-image-picker';
import { useQuery } from 'react-query';
import { GetUserInfo } from '../../api/auth';
import { RootState } from '../../redux/reducer';
import { useSelector } from 'react-redux';

interface ProfileBoxProps {
  width?: number;
  height?: number;
}
const ProfileBox = ({ width, height }: ProfileBoxProps) => {
  const [image, setImage] = useState('');

  const { token } = useSelector((state: RootState) => state);

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

  const { data } = useQuery('GetUserInfo', () => GetUserInfo({}), {
    retry: 1,
    enabled: !!token,
    onSuccess: e => {
      console.log(e);
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#000000" />
      <View style={[styles.box, { width }]}>
        <TouchableOpacity onPress={pickImage}>
          <ProfileImage
            height={height ? height - 10 : 0}
            width={height ? height - 10 : 0}
            image={data?.data.profileImg}
          />
        </TouchableOpacity>
        <ProfileInfo data={data} />
      </View>
    </View>
  );
};

export default ProfileBox;

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffffbd',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    marginTop: screenHeight / 20,
    display: 'flex',
    flexDirection: 'row',
  },
});
