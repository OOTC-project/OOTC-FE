import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Pressable,
  Modal,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import React, { useState } from 'react';
import SelectImage from '../../components/organism/SelectImage';
import Item from '../../components/organism/Item';
import ImageBox from '../../components/atoms/ImagesBox';
import { BlurView } from 'expo-blur';
import ImageSelectBox from '../../components/atoms/ImageSelectBox';
import { moderateScale, scale } from '../../utils/styleGuide';
import ImageBoxContainer from '../../components/molecules/ImageBoxContainer';

const Select = () => {
  const [selected, setSelected] = useState<null | number>(null);
  const [selectTitle, setSelectTitle] = useState<null | string>(null);
  const [modalVisible, setModalVisible] = useState(false);
  // const image = {url:'https://legacy.reactjs.org/logo-og.png'}
  // const image = require('../../../assets/bg.png');
  const loadingImage = require('../../../assets/splashW.png');
  const [loading, setLoading] = useState(false);
  const handleImageLoad = () => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  };

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: 'https://ifh.cc/g/NqpJCd.jpg' }}
          style={styles.background}
          onLoad={handleImageLoad}
        >
          {loading ? (
            <>
              <View style={styles.marginTop} />
              <View style={styles.menuContainer}>
                <SelectImage />
                <View style={styles.mt}>
                  <View style={styles.scrollView}>
                    {DATA.map(item => (
                      <View style={styles.boxBox} key={item.id}>
                        <Item
                          item={item}
                          setSelected={setSelected}
                          setSelectTitle={setSelectTitle}
                          setModalVisible={setModalVisible}
                        />
                      </View>
                    ))}
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
                        <View style={{ borderRadius: 30, overflow: 'hidden' }}>
                          <BlurView
                            intensity={100}
                            tint="systemThickMaterialDark"
                            style={styles.modalBox}
                          >
                            <ImageSelectBox
                              height={'30%'}
                              margin={1.2}
                              borderRadius={5}
                            />
                            <ImageSelectBox
                              height={'30%'}
                              margin={1.2}
                              borderRadius={5}
                            />
                            <ImageSelectBox
                              height={'30%'}
                              margin={1.2}
                              borderRadius={5}
                            />
                            <ImageSelectBox
                              height={'30%'}
                              margin={1.2}
                              borderRadius={5}
                            />
                            <ImageSelectBox
                              height={'30%'}
                              margin={1.2}
                              borderRadius={5}
                            />
                          </BlurView>
                        </View>

                        <Text
                          style={[
                            styles.modalTitle,
                            {
                              fontSize: scale(
                                selectTitle && selectTitle.length > 6 ? 50 : 60,
                              ),
                            },
                          ]}
                        >
                          {selectTitle}
                        </Text>
                      </View>
                    </Modal>
                  </View>
                </View>
              </View>
            </>
          ) : (
            <View style={styles.loadingBackground}>
              <Image
                source={loadingImage}
                style={styles.loading}
                onLoad={handleImageLoad}
                resizeMode="contain"
              />
            </View>
          )}
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
  marginTop: { marginBottom: scale(10) },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  loadingBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: '#fff',
  },
  loading: {
    flex: 1,
    width: '100%',
    zIndex: 999,
  },
  menuContainer: {
    flex: 1,
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
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#3c3c3c',
    // color: '#f1eeee',
    marginTop: 10,
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
