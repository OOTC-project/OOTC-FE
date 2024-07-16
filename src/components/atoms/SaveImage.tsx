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
  Image,
} from 'react-native';
import React, { useState } from 'react';
import ImagePickerExample from '../organism/ImagePicker';
import OotdItemBox from '../organism/OotdItemBox';
import { scale } from '../../utils/styleGuide';
import { GetCodyType } from '../../api/types';

interface SaveImageProp {
  index: number;
  data?: GetCodyType;
}

const SaveImage = ({ index, data }: SaveImageProp) => {
  const [modalVisible, setModalVisible] = useState(false);
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const [photoData, setPhotoData] = useState({
    name: '',
    url: '',
    position: '',
  });
  const [name, setName] = useState('');
  const handleSave = () => {
    setModalVisible(!modalVisible);
    setPhotoData(prevData => ({ ...prevData, name: name }));
  };

  return (
    <View style={styles.container}>
      {data && data.data && data.data.data ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={() => {
            console.log('Scrolling is End');
          }}
          contentContainerStyle={styles.scrollViewContent}
          data={data.data.data}
          renderItem={({ item, index }) => (
            <TouchableOpacity>
              <OotdItemBox width={screenWidth - 40} height={screenHeight / 2}>
                {item.clothes.clothesImg ? (
                  <Image source={{ uri: item.clothes.clothesImg }} />
                ) : (
                  <Text style={styles.title}>{item.clothes.name}</Text>
                )}
              </OotdItemBox>
            </TouchableOpacity>
          )}
        />
      ) : (
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <OotdItemBox width={screenWidth - 40} height={screenHeight / 2}>
            <Text style={styles.title}>+</Text>
          </OotdItemBox>
        </TouchableOpacity>
      )}
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
                placeholder="사진 이름을 입력해주세요."
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
                height={screenHeight / 2}
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
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#181818',
    opacity: 0.95,
    width: '100%',
    height: '100%',
    borderRadius: 18,
    padding: 10,
  },
  modalBox: {},
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
    color: '#2b2929',

    marginVertical: 5,
  },
});
