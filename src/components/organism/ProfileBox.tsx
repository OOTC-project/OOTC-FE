import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import ProfileImage from '../molecules/ProfileImage';
import ProfileInfo from '../molecules/ProfileInfo';
import * as ImagePicker from 'expo-image-picker';
import { GetUserInfoType } from '../../api/types';
import { COLOR } from '../../layout/default';

interface ProfileBoxProps {
  width?: number;
  height?: number;
  infoData?: GetUserInfoType;
}
const ProfileBox = ({ width, height, infoData }: ProfileBoxProps) => {
  const [image, setImage] = useState('');
  const [modify, setModify] = useState(false);

  const pickImage = async () => {
    setModify(true);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.assets && !result.canceled) {
      setImage(result.assets[0].uri);
      Alert.alert('저장을 눌러주세요.');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#000000" />
      <View style={[styles.box, { width }]}>
        <TouchableOpacity onPress={pickImage}>
          <ProfileImage
            height={height ? height - 10 : 0}
            width={height ? height - 10 : 0}
            image={infoData?.data.profileImg ?? image ?? ''}
          />
        </TouchableOpacity>
        <ProfileInfo
          data={infoData}
          modify={modify}
          setModify={setModify}
          setImage={setImage}
        />
      </View>
    </View>
  );
};

export default ProfileBox;

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.blur,
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
