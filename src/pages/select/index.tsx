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
import TitleBox from '../../components/molecules/TitleBox';
import OotdItemContainer from '../../components/organism/OotdItemContainer';
import OotdItemBox from '../../components/organism/OotdItemBox';
import ItemBox from '../../components/organism/ItemBox';
import ImagePickerExample from '../../components/organism/ImagePicker';
import { scale, verticalScale } from '../../utils/styleGuide';
import { SafeAreaView } from 'react-native-safe-area-context';
import BadgeBox from '../../components/molecules/BadgeBox';

interface ListType {
  key: string;
  screen: string;
}

const OotdPage = () => {
  const image = { uri: 'https://ifh.cc/g/NqpJCd.jpg' };

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

  const [photoData, setPhotoData] = useState({
    url: '',
    position: '',
    tag: '',
    des: '',
  });
  const [name, setName] = useState('');
  const handleSave = () => {
    if (photoData.position && photoData.url) {
      setModalVisible(!modalVisible);
    } else {
      Alert.alert(
        '',
        '빠진 곳이 있어요!!',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false },
      );
    }
  };
  console.log(photoData);
  const screenHeight = Dimensions.get('window').height;

  return (
    <>
      <ImageBackground
        source={image}
        style={styles.background}
        resizeMode="cover"
      />

      <SafeAreaView style={{ marginTop: verticalScale(20) }} />
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
              index === list.length - 1 ? setModalVisible(true) : null;
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
              <BadgeBox />
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
    </>
  );
};

export default OotdPage;

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
    backgroundColor: '#181818',
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
    backgroundColor: '#2b2929',
    marginTop: 10,
  },
  saveBtnText: {
    color: '#fff',
    fontSize: scale(15),
  },
  closeBtn: {
    paddingVertical: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    backgroundColor: '#2b2929',
    marginTop: 10,
  },
  closeBtnText: {
    color: '#fff',
    fontSize: scale(15),
  },
  textInput: {
    padding: 10,
    borderRadius: 13,
    backgroundColor: '#2b2929',
    color: '#fff',

    marginVertical: 5,
  },
});
