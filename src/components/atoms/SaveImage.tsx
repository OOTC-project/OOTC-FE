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
import Theme, { scale } from '../../utils/styleGuide';
import { GetCodyType } from '../../api/types';
import { COLOR } from '../../layout/default';

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

  const handleCancel = () => {
    setPhotoData({
      name: '',
      url: '',
      position: '',
    });
    setModalVisible(!modalVisible);
  };

  const renderItem = ({ item }: any) => (
    <TouchableOpacity onPress={() => item.placeholder && setModalVisible(true)}>
      <OotdItemBox width={screenWidth} height={Theme.height * 300}>
        {item.placeholder ? (
          <Text style={styles.title}>+</Text>
        ) : item.clothes.clothesImg ? (
          <Image
            source={{ uri: item.clothes.clothesImg }}
            style={styles.image}
          />
        ) : (
          <Text style={styles.title}>{item.clothes.name}</Text>
        )}
      </OotdItemBox>
    </TouchableOpacity>
  );

  // Add a placeholder object for the "+" button
  const modifiedData = data?.data ? [...data.data, { placeholder: true }] : [];

  return (
    <View style={styles.container}>
      {modifiedData.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
          data={modifiedData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <OotdItemBox width={screenWidth} height={Theme.height * 300}>
            <Text style={styles.title}>+</Text>
          </OotdItemBox>
        </TouchableOpacity>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modal}>
            <View style={styles.modalBox}>
              <ImagePickerExample
                photoData={photoData}
                setPhotoData={setPhotoData}
                height={screenHeight / 2}
              />
              <TextInput
                placeholder="사진 이름을 입력해주세요."
                placeholderTextColor="grey"
                keyboardType="default"
                style={styles.textInput}
                value={name}
                onChangeText={setName}
              />
            </View>
            <Pressable style={styles.saveBtn} onPress={handleSave}>
              <Text style={styles.saveBtnText}>저장</Text>
            </Pressable>
            <Pressable style={styles.closeBtn} onPress={handleCancel}>
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
  },
  scrollViewContent: { alignItems: 'center' },
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: '600',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: COLOR.black,
    opacity: 0.95,
    width: '100%',
    height: '100%',
    padding: 10,
  },
  modalBox: {},
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
