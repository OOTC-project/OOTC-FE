import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Pressable,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { useState } from 'react';
import SelectImage from '../../components/organism/SelectImage';
import Item from '../../components/organism/Item';
import ImageBox from '../../components/atoms/ImagesBox';
import { BlurView } from 'expo-blur';

const Select = () => {
  const [selected, setSelected] = useState<null | number>(null);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../assets/backGround/default.png')}
          style={styles.background}
        >
          <View style={styles.marginTop} />
          <SelectImage />
          <View style={styles.mt}>
            <View style={styles.scrollView}>
              {DATA.map(item => (
                <View style={styles.boxBox} key={item.id}>
                  <Item
                    item={item}
                    setSelected={setSelected}
                    setModalVisible={setModalVisible}
                  />
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
                      <Text style={styles.modalTitle}>
                        {selected === item.id ? item.title : null}
                      </Text>
                      <View style={{ borderRadius: 30, overflow: 'hidden' }}>
                        <BlurView
                          intensity={20}
                          tint="systemThickMaterialDark"
                          style={styles.modalBox}
                        >
                          <ImageBox
                            height={'30%'}
                            margin={5}
                            borderRadius={12}
                          />
                          <ImageBox
                            height={'30%'}
                            margin={5}
                            borderRadius={12}
                          />
                          <ImageBox
                            height={'30%'}
                            margin={5}
                            borderRadius={12}
                          />
                          <ImageBox
                            height={'30%'}
                            margin={5}
                            borderRadius={12}
                          />
                          <ImageBox
                            height={'30%'}
                            margin={5}
                            borderRadius={12}
                          />
                          <ImageBox
                            height={'30%'}
                            margin={5}
                            borderRadius={12}
                          />
                          <ImageBox
                            height={'30%'}
                            margin={5}
                            borderRadius={12}
                          />
                          <ImageBox
                            height={'30%'}
                            margin={5}
                            borderRadius={12}
                          />
                        </BlurView>
                      </View>
                    </View>
                  </Modal>
                </View>
              ))}
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Select;
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  marginTop: { marginBottom: 40 },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  mt: { marginTop: 10 },
  scrollView: { width: screenWidth, flexDirection: 'row', flexWrap: 'wrap' },
  boxBox: {
    display: 'flex',
    alignItems: 'center',
    width: screenWidth / 4,
    flexDirection: 'column',
  },

  modal: {
    width: screenWidth / 1.3,
    height: screenWidth / 1.3 + 10,
    left: (screenWidth - screenWidth / 1.3) / 2,
    top: (screenWidth / 1.3 + 10) / 2,
    position: 'absolute',
  },
  modalBox: {
    height: '100%',
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 32,
    padding: 10,
  },
  modalTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f1eeee',
    marginBottom: 10,
  },
});
const DATA = [
  { id: 0, title: 'Bookmark' },
  { id: 1, title: 'Outer' },
  { id: 2, title: 'Top' },
  { id: 3, title: 'Bottom' },
  { id: 4, title: 'Hat' },
  { id: 5, title: 'shoes' },
  { id: 6, title: 'Accessories' },
  { id: 7, title: 'Bag' },
  { id: 8, title: 'Socks' },
  { id: 9, title: 'Glasses' },
];
