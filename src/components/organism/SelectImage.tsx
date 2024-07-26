import {
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import Count from '../molecules/Count';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducer';
import { AntDesign } from '@expo/vector-icons';
import { removeItem } from '../../redux/slice/itemSlice';
import { COLOR } from '../../layout/default';
import Theme from '../../utils/styleGuide';

const SelectImage = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const handleModal = () => {
    setModalVisible(true);
  };

  const { counter: itemCounter } = useSelector((state: RootState) => state);
  const handleDelete = (id: number) => {
    dispatch(removeItem(id));
    setModalVisible(false);
  };

  return (
    <>
      {itemCounter.length > 0 ? (
        <>
          <TouchableOpacity style={styles.container} onPress={handleModal}>
            <Image
              source={{
                uri: itemCounter.length > 0 ? itemCounter[0].img : '',
              }}
              style={{ width: '100%', height: '100%', borderRadius: 100 }}
              resizeMode="cover"
            />
            <Count />
          </TouchableOpacity>

          <Modal
            animationType="slide"
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.modalContainer}>
              <View style={styles.boxContainer}>
                {itemCounter.map(e => (
                  <View
                    key={e.id}
                    style={{
                      ...styles.box,
                      width: Theme.width * 120,
                      height: Theme.height * 120,
                      marginVertical: Theme.height * 10,
                    }}
                  >
                    <TouchableOpacity
                      style={styles.deleteButton}
                      onPress={() => handleDelete(e.id)}
                    >
                      <AntDesign name="minuscircleo" size={17} color="#fff" />
                    </TouchableOpacity>
                    <Image
                      source={{
                        uri: e.img,
                      }}
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 16,
                      }}
                    />
                  </View>
                ))}
              </View>
              <Pressable
                onPress={() => setModalVisible(!modalVisible)}
                style={styles.closeBtn}
              >
                <AntDesign name="closecircleo" size={50} color="#bcbcbc" />
              </Pressable>
            </View>
          </Modal>
        </>
      ) : null}
    </>
  );
};

export default SelectImage;

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    backgroundColor: COLOR.black,
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginBottom: 10,
    marginRight: 10,
    zIndex: 9999,
  },
  modalContainer: {
    backgroundColor: COLOR.black,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  boxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    position: 'relative',
  },
  closeBtn: { marginTop: 50 },
  deleteButton: {
    zIndex: 999,
    position: 'absolute',
    top: 130,
    padding: 5,
    margin: 20,
  },
});
