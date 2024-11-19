import { Dispatch, SetStateAction, useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Pressable,
  Modal,
} from 'react-native';
import ImageBoxContainer from '../molecules/ImageBoxContainer';
import { COLOR } from '../../layout/default';

interface ItemModalProps {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}

const ItemModal = ({ modalVisible, setModalVisible }: ItemModalProps) => {
  const handleClose = () => {
    setModalVisible(false);
  };

  return (
    <Modal transparent visible={modalVisible} onRequestClose={handleClose}>
      <Pressable style={styles.overlay} onPress={handleClose} />
      <View style={styles.modal}>
        <Text style={styles.modalTitle}>Item</Text>
        <View style={styles.modalContent}>
          <Pressable onPress={handleClose}>
            <Text style={styles.cancelButtonText}>취소</Text>
          </Pressable>
        </View>
        <ImageBoxContainer />
      </View>
    </Modal>
  );
};

export default ItemModal;

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    position: 'absolute',
    width: screenWidth * 0.75,
    height: screenWidth * 0.75 + 30,
    left: (screenWidth - screenWidth * 0.75) / 2,
    top: (screenHeight - (screenWidth * 0.75 + 30)) / 2,
    backgroundColor: COLOR.red,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLOR.white,
    marginBottom: 16,
    textAlign: 'center',
  },
  cancelButtonText: {
    fontSize: 16,
    color: COLOR.white,
    textAlign: 'center',
  },
});
