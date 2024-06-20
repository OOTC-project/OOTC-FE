import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Modal,
  Pressable,
  TouchableOpacity,
  Animated,
  ActivityIndicator,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slice/itemSlice';

const ImageSelectBox = ({
  height,
  margin,
  borderRadius,
  width,
  select,
  setSelect,
}: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [imgLoading, setImgLoading] = useState(true);
  const [loading, setLoading] = useState(true);

  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (modalVisible) {
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 80,
        useNativeDriver: true,
      }).start();
    } else {
      scaleValue.setValue(0);
    }
  }, [modalVisible, scaleValue]);

  useEffect(() => {
    if (!modalVisible) {
      setSelect(0);
    }
  }, [modalVisible]);

  const dispatch = useDispatch();

  const handleClick = (id: number, img: string) => {
    setSelect(1);

    const newItem = { id: id, img: img };
    dispatch(addItem(newItem));
  };

  return (
    <View style={[styles.container, { height, margin, borderRadius }]}>
      <TouchableOpacity
        style={styles.image}
        onPress={() => setModalVisible(!modalVisible)}
      >
        {/* {loading ? (
            <ActivityIndicator
              color="#000"
              size="large"
              style={styles.loadingIndicator}
            />
          ) : ( */}
        <Image
          source={{
            uri: 'https://i.ibb.co/KXZY4ZY/mojtaba-mosayebzadeh-kc-Ztpg-Tm0og-unsplash.jpg',
          }}
          style={[styles.image, { borderRadius: 13 }]}
          onLoad={() => setLoading(false)}
        />
        {/* )} */}
      </TouchableOpacity>

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
        <Animated.View
          style={[styles.modal, { transform: [{ scale: scaleValue }] }]}
        >
          {/* {imgLoading ? (
            <ActivityIndicator
              color="#000"
              size="large"
              style={styles.loadingIndicator}
            />
          ) : ( */}
          <TouchableOpacity
            onPress={() =>
              handleClick(
                1,
                'https://i.ibb.co/KXZY4ZY/mojtaba-mosayebzadeh-kc-Ztpg-Tm0og-unsplash.jpg',
              )
            }
          >
            <Image
              source={{
                uri: 'https://i.ibb.co/KXZY4ZY/mojtaba-mosayebzadeh-kc-Ztpg-Tm0og-unsplash.jpg',
              }}
              style={[
                styles.image,
                {
                  borderRadius: 32,
                  borderWidth: 4,
                  borderColor: select !== 0 ? '#332ed1' : '#212121',
                },
              ]}
              onLoad={() => setImgLoading(false)}
            />
          </TouchableOpacity>

          {/* )} */}
        </Animated.View>
      </Modal>
    </View>
  );
};

export default ImageSelectBox;

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '32%',
    flexDirection: 'column',
    padding: 2,
  },
  modal: {
    width: screenWidth / 1.3,
    height: screenWidth / 1.3 + 10,
    left: (screenWidth - screenWidth / 1.3) / 2,
    top: (screenWidth / 1.3 + 10) / 2,
    position: 'absolute',
    borderRadius: 32,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  loadingIndicator: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -12,
    marginTop: -12,
  },
});
