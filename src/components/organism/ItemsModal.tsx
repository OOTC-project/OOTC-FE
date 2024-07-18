import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Pressable,
  Modal,
} from 'react-native';
import React from 'react';
import ImageBoxContainer from '../molecules/ImageBoxContainer';
import { COLOR } from '../../layout/default';

interface ItemModalProps {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
const ItemModal = ({ modalVisible, setModalVisible }: ItemModalProps) => {
  return (
    <Modal
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <Pressable
        style={{
          flex: 1,
        }}
        onPress={() => setModalVisible(false)}
      ></Pressable>
      <View style={styles.modal}>
        <Text style={styles.modalTitle}>item</Text>
        <View style={styles.modalBox}>
          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <Text>취소</Text>
          </Pressable>
        </View>
        <ImageBoxContainer />
      </View>
    </Modal>
  );
};

export default ItemModal;
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  modal: {
    width: screenWidth / 1.3,
    height: screenWidth / 1.3 + 30,
    left: (screenWidth - screenWidth / 1.3) / 2,
    top: (screenWidth / 1.3 + 30) / 2,
    position: 'absolute',
  },
  modalBox: {
    backgroundColor: COLOR.red,
    opacity: 0.7,
    height: '100%',
    width: '100%',
    borderRadius: 32,
  },
  modalTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLOR.white,
    marginBottom: 10,
  },
});
