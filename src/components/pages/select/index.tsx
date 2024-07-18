import {
  Alert,
  Dimensions,
  FlatList,
  Keyboard,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useMutation, useQueryClient } from 'react-query';
import { COLOR } from '../../../layout/default';
import { scale } from '../../../utils/styleGuide';
import { RootStackParamList } from '../../../types';
import { RootState } from '../../../redux/reducer';
import { PostClothes } from '../../../api/service';
import BackgroundSafeAreaView from '../../molecules/BackgroundSafeAreaView';
import OotdItemBox from '../../organism/OotdItemBox';
import ImagePickerExample from '../../organism/ImagePicker';
import BadgeBox from '../../molecules/BadgeBox';

const OotcPage = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const data = [
    { key: '1', screen: 'Screen 1' },
    { key: '2', screen: 'Screen 2' },
    { key: '3', screen: 'Screen 3' },
    { key: '4', screen: 'Screen 3' },
    { key: '5', screen: 'Screen 3' },
    { key: '6', screen: 'Screen 3' },
  ];
  const [list, setList] = useState(data);
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

  useEffect(() => {
    if (list.length === data.length) {
      setList(prevList => [
        ...prevList,
        { key: new Date().toString(), screen: '+' },
      ]);
    }
  }, [list]);

  const [modalVisible, setModalVisible] = useState(false);
  const token = useSelector((state: RootState) => state.token.accessToken);

  const openSelectModal = () => {
    if (token) {
      setModalVisible(true);
    } else {
      Alert.alert(
        '로그인이 필요합니다.',
        '로그인이 페이지로 이동합니다.',
        [
          {
            text: '취소',
            onPress: () => {
              setModalVisible(false);
            },
            style: 'cancel',
          },
          {
            text: '확인',
            onPress: () => {
              navigation.navigate('LoginPage');
            },
            style: 'destructive',
          },
        ],
        {
          cancelable: true,
          onDismiss: () => {},
        },
      );
    }
  };

  const [photoData, setPhotoData] = useState<{
    url: string;
    name: string;
    position: string;
    tag?: string;
    des?: string;
  }>({ name: '', url: '', position: '', tag: '', des: '' });

  const handleSave = () => {
    if (photoData.position && photoData.url) {
      setModalVisible(!modalVisible);
      PostNewClothes({
        clothesImg: photoData.url,
        name: photoData.name,
        description: photoData.des,
        position: photoData.position,
        fkCategoryId: 0,
        // fkCategoryId: photoData.tag,
      });
    } else {
      Alert.alert(
        '',
        '빠진 곳이 있어요!!',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false },
      );
    }
  };

  const screenHeight = Dimensions.get('window').height;
  const queryClient = useQueryClient();

  const { mutate: PostNewClothes } = useMutation(PostClothes, {
    onSuccess: () => {
      Alert.alert(`등록이 완료되었습니다.`);
      queryClient.invalidateQueries('GetUserInfo');
    },
    onError: () => {
      Alert.alert(`애러가 발생했습니다. 다시 시도해주세요.`);
    },
  });

  return (
    <>
      <BackgroundSafeAreaView backgroundImage="https://ifh.cc/g/NqpJCd.jpg">
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={() => {
            console.log('Scrolling is End');
          }}
          contentContainerStyle={styles.scrollViewContent}
          data={list}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                index === list.length - 1 ? openSelectModal() : null;
              }}
            >
              <OotdItemBox>
                <Text style={styles.title}>{item.screen}</Text>
              </OotdItemBox>
            </TouchableOpacity>
          )}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modal}>
              <View style={styles.modalBox}>
                <ImagePickerExample
                  setPhotoData={setPhotoData}
                  height={screenHeight / 4}
                  width
                />
                <TextInput
                  placeholder="위치를 입력해주세요."
                  placeholderTextColor="grey"
                  keyboardType="default"
                  style={styles.textInput}
                  value={photoData.position}
                  onChangeText={text => {
                    setPhotoData(prevData => ({
                      ...prevData,
                      position: text,
                    }));
                  }}
                />
                <TextInput
                  placeholder="이름을 입력해주세요."
                  placeholderTextColor="grey"
                  keyboardType="default"
                  style={styles.textInput}
                  value={photoData.name}
                  onChangeText={text => {
                    setPhotoData(prevData => ({
                      ...prevData,
                      name: text,
                    }));
                  }}
                />
                <TextInput
                  placeholder="간단한 설명을 써주세요."
                  placeholderTextColor="grey"
                  style={[
                    styles.textInput,
                    {
                      height: 120,
                      textAlignVertical: 'top',
                    },
                  ]}
                  value={photoData.des}
                  onChangeText={text => {
                    setPhotoData(prevData => ({
                      ...prevData,
                      des: text,
                    }));
                  }}
                />
                <BadgeBox photoData={photoData} setPhotoData={setPhotoData} />
              </View>
              {!keyboardVisible && (
                <>
                  <Pressable style={styles.saveBtn} onPress={handleSave}>
                    <Text style={styles.saveBtnText}>저장</Text>
                  </Pressable>
                  <Pressable
                    style={styles.closeBtn}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.closeBtnText}>취소</Text>
                  </Pressable>
                </>
              )}
            </View>
          </View>
        </Modal>
      </BackgroundSafeAreaView>
    </>
  );
};

export default OotcPage;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexWrap: 'wrap',
    marginTop: 10,
    marginVertical: 40,
  },
  marginTop: { marginBottom: scale(10) },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  scrollViewContent: { alignItems: 'center' },
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: '600',
    marginBottom: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: COLOR.black,
    opacity: 0.95,
    width: '100%',
    height: '100%',
    borderRadius: 18,
    padding: 10,
  },
  modalBox: { flex: 8 },
  saveBtn: {
    paddingVertical: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    backgroundColor: COLOR.black,
    marginTop: 10,
  },
  saveBtnText: {
    color: COLOR.white,
    fontSize: scale(15),
  },
  closeBtn: {
    paddingVertical: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    backgroundColor: COLOR.black,
    marginTop: 10,
  },
  closeBtnText: {
    color: COLOR.white,
    fontSize: scale(15),
  },
  textInput: {
    padding: 10,
    borderRadius: 13,
    backgroundColor: COLOR.black,
    color: COLOR.white,

    marginVertical: 5,
  },
});
