import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  FlatList,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import ImagePickerExample from '../organism/ImagePicker';
import OotdItemContainer from '../organism/OotdItemContainer';
import OotdItemBox from '../organism/OotdItemBox';

interface SaveImageProp {
  index: number;
}

const SaveImage = ({ index }: SaveImageProp) => {
  const data: string | { key: string; screen: string }[] = [
    { key: '1', screen: 'Screen 1' },
    { key: '2', screen: 'Screen 2' },
    { key: '3', screen: 'Screen 3' },
    { key: '4', screen: 'Screen 3' },
    { key: '5', screen: 'Screen 3' },
    { key: '6', screen: 'Screen 3' },
  ];

  const [list, setList] = useState(data);

  useEffect(() => {
    if (list.length === data.length) {
      setList(prevList => [
        ...prevList,
        { key: new Date().toString(), screen: '+' },
      ]);
    }
  }, [list]);
  const [modalVisible, setModalVisible] = useState(false);
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const [photoData, setPhotoData] = useState({ url: '', position: '' });
  const [name, setName] = useState('');
  const handleSave = () => {
    setModalVisible(!modalVisible);
    setPhotoData(prevData => ({ ...prevData, name: name }));
  };

  return (
    <View style={styles.container}>
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
            <OotdItemBox width={screenWidth - 40} height={screenHeight / 2}>
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
              <TextInput
                placeholder="태그명을 입력해주세요."
                placeholderTextColor="grey"
                keyboardType="default"
                style={styles.textInput}
                value={name}
                onChangeText={text => {
                  setName(text);
                }}
              />
              <ImagePickerExample
                photoData={photoData}
                setPhotoData={setPhotoData}
              />
            </View>
            <Pressable style={styles.saveBtn} onPress={handleSave}>
              <Text style={styles.saveBtnText}>저장</Text>
            </Pressable>
            <Pressable
              style={styles.closeBtn}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.closeBtnText}>취소</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SaveImage;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
    marginTop: 10,
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    backgroundColor: '#2b2929',
    marginTop: 10,
  },
  saveBtnText: {
    color: '#2b2929',
    fontSize: 20,
  },
  closeBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    backgroundColor: '#2b2929',
    marginTop: 10,
  },
  closeBtnText: {
    color: '#2b2929',
    fontSize: 20,
  },
  textInput: {
    padding: 10,
    borderRadius: 13,
    backgroundColor: '#2b2929',
    color: '#2b2929',

    marginVertical: 5,
  },
});
