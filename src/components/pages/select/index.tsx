import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
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
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { COLOR } from '../../../layout/default';
import Theme, { scale } from '../../../utils/styleGuide';
import { RootStackParamList } from '../../../types';
import { RootState } from '../../../redux/reducer';
import { GetCategory, PostClothes } from '../../../api/service';
import BackgroundSafeAreaView from '../../molecules/BackgroundSafeAreaView';
import OotdItemBox from '../../organism/OotdItemBox';
import ImagePickerExample from '../../organism/ImagePicker';
import BadgeBox from '../../molecules/BadgeBox';
import { clothesArray, clothesData } from '../../../api/types';

const OotcPage = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const { data, isLoading, refetch } = useQuery(
    'GetCategory',
    () => GetCategory({}),
    {
      retry: 1,
      onError: () => {
        Alert.alert('로그인이 필요합니다.');
        navigation.navigate('LoginPage');
      },
    },
  );

  function gatherAllClothes(categories: clothesArray[]): clothesData[] {
    const allClothes: clothesData[] = [];
    for (const category of categories) {
      allClothes.push(...category.clothes);
    }
    return allClothes;
  }

  // Add a placeholder object for the "+" button
  const allClothes = data
    ? [...gatherAllClothes(data.data), { placeholder: true }]
    : [];

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

  const handleCancel = () => {
    setPhotoData({
      name: '',
      url: '',
      position: '',
      tag: '',
      des: '',
    });
    setModalVisible(!modalVisible);
  };

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const queryClient = useQueryClient();

  const { mutate: PostNewClothes } = useMutation(PostClothes, {
    onSuccess: () => {
      Alert.alert('등록이 완료되었습니다.');
      queryClient.invalidateQueries('GetUserInfo');
      setPhotoData({ name: '', url: '', position: '', tag: '', des: '' });
    },
    onError: e => {
      console.log(e);

      Alert.alert('애러가 발생했습니다. 다시 시도해주세요.');
    },
  });

  const renderItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <TouchableOpacity onPress={() => item.placeholder && openSelectModal()}>
        <OotdItemBox width={screenWidth} height={Theme.height * 300}>
          {item.placeholder ? (
            <Text style={styles.title}>+</Text>
          ) : item && item.clothesImg ? (
            <Image
              source={{ uri: item.clothesImg }}
              style={{
                width: screenWidth,
                height: Theme.height * 300,
              }}
            />
          ) : (
            <Text style={styles.title}>{item ? item.name : ''}</Text>
          )}
        </OotdItemBox>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <ImageBackground
        source={{ uri: 'https://ifh.cc/g/NqpJCd.jpg' }}
        style={styles.background}
        resizeMode="cover"
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
          data={allClothes}
          renderItem={renderItem}
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

              {!keyboardVisible && (
                <>
                  <Pressable style={styles.saveBtn} onPress={handleSave}>
                    <Text style={styles.saveBtnText}>저장</Text>
                  </Pressable>
                  <Pressable style={styles.closeBtn} onPress={handleCancel}>
                    <Text style={styles.closeBtnText}>취소</Text>
                  </Pressable>
                </>
              )}
            </View>
          </View>
        </Modal>
      </ImageBackground>
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
    padding: 10,
  },
  saveBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    backgroundColor: COLOR.black,
    marginTop: 10,
    height: Theme.height * 40,
    borderWidth: 1,
    borderColor: COLOR.darkgray,
  },
  saveBtnText: {
    color: COLOR.white,
    fontSize: Theme.fontSizes.fontSizes12,
  },
  closeBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    backgroundColor: COLOR.black,
    marginTop: 10,
    height: Theme.height * 40,
    borderWidth: 1,
    borderColor: COLOR.darkgray,
  },
  closeBtnText: {
    color: COLOR.white,
    fontSize: Theme.fontSizes.fontSizes12,
  },
  textInput: {
    padding: 10,
    borderRadius: 13,
    backgroundColor: COLOR.lightgrey,
    color: COLOR.black,
    marginVertical: 5,
  },
});
