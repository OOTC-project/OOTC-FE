import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TextInput,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import LevelBox from './LevelBox';
import Theme, { scale } from '../../utils/styleGuide';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  CommonActions,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setAccessToken } from '../../redux/slice/userSlice';
import { RootStackParamList } from '../../types';
import { GetUserInfoType } from '../../api/types';
import { PatchUserInfo } from '../../api/auth';
import { useMutation, useQueryClient } from 'react-query';
import { resetItem } from '../../redux/slice/itemSlice';
import { COLOR } from '../../layout/default';

interface ProfileInfoProps {
  data?: GetUserInfoType;
  modify: boolean;
  setModify: React.Dispatch<React.SetStateAction<boolean>>;
  setImage: React.Dispatch<React.SetStateAction<string>>;
}

const ProfileInfo = ({
  data,
  modify,
  setModify,
  setImage,
}: ProfileInfoProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const handleModify = () => {
    // navigation.navigate('ModifyPage');
    setModify(true);
  };
  const queryClient = useQueryClient();

  const { mutate: updateUserInfo } = useMutation(PatchUserInfo, {
    onSuccess: () => {
      Alert.alert(`수정이 완료되었습니다.`);
      setModify(false);
      queryClient.invalidateQueries('GetUserInfo');
    },
    onError: () => {
      Alert.alert(`애러가 발생했습니다. 다시 시도해주세요.`);
    },
  });

  const postModifyData = () => {
    updateUserInfo({ name, email, uploadedFiles: {} });
  };

  const handleModifyCancel = () => {
    setModify(false);
    setImage('');
  };

  const handleDelete = () => {
    Alert.alert(
      '회원탈퇴',
      '정말로 회원탈퇴 하시겠습니까?',
      [
        { text: '취소', onPress: () => {}, style: 'cancel' },
        {
          text: '삭제',
          onPress: () => {
            console.log('삭제');
          },
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {},
      },
    );
  };

  const removeToken = async () => {
    try {
      await AsyncStorage.removeItem('@user_token');
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Ootd' }],
        }),
      );
      dispatch(setAccessToken(null));
      dispatch(resetItem());
    } catch (error) {
      console.error('token애러', error);
    }
  };

  const handleLogout = () => {
    Alert.alert(
      '로그아웃',
      '정말 로그아웃 하시겠습니까?',
      [
        { text: '취소', style: 'cancel' },
        { text: '확인', onPress: removeToken },
      ],
      { cancelable: false },
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.flexBox}>
        {modify ? (
          <View style={styles.textInputBox}>
            <TextInput
              placeholder="아이디를 입력해주세요."
              placeholderTextColor="grey"
              keyboardType="default"
              value={name}
              onChangeText={setName}
              style={styles.textInput}
            />
            <TextInput
              placeholder="이름을 입력해주세요."
              placeholderTextColor="grey"
              keyboardType="default"
              value={email}
              onChangeText={setEmail}
              style={styles.textInput}
            />
          </View>
        ) : (
          <Text style={styles.name}>
            {data && data.data ? data.data.userId : '-'}
          </Text>
        )}

        <Text style={styles.name}>
          {data && data.data && !modify ? `(${data.data.name})` : null}
        </Text>
      </View>
      {modify ? null : <LevelBox />}

      <View style={[styles.flexBox, { justifyContent: 'space-between' }]}>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.logOut}>로그아웃</Text>
        </TouchableOpacity>

        <View style={styles.flexBox}>
          <TouchableOpacity
            onPress={modify ? postModifyData : handleModify}
            style={styles.modifyBox}
          >
            <Text style={styles.modify}>{modify ? '저장' : '정보수정'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={modify ? handleModifyCancel : handleDelete}
            style={styles.deleteBox}
          >
            <Text style={styles.delete}>{modify ? '취소' : '회원탈퇴'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileInfo;

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginLeft: 15,
    marginBottom: 5,
  },
  flexBox: { display: 'flex', flexDirection: 'row' },
  name: {
    color: COLOR.black,
    fontWeight: '600',
    fontSize: Theme.fontSizes.fontSizes22,
  },
  logOut: {
    color: COLOR.red,
    fontWeight: '600',
    fontSize: Theme.fontSizes.fontSizes12,
    margin: 5,
  },
  modifyBox: {
    backgroundColor: COLOR.blue,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  modify: {
    color: COLOR.white,
    fontWeight: '600',
    fontSize: Theme.fontSizes.fontSizes12,
    margin: 5,
  },
  deleteBox: {
    backgroundColor: COLOR.red,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  delete: {
    color: COLOR.white,
    fontWeight: '600',
    fontSize: Theme.fontSizes.fontSizes12,
    margin: 5,
  },
  textInputBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  textInput: {
    fontSize: Theme.fontSizes.fontSizes12,
    padding: 8,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: COLOR.black,
    color: COLOR.white,
    width: screenWidth / 2.7,
    margin: 3,
  },
});
