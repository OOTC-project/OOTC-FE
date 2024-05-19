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

const ImageSelectBox = ({ height, margin, borderRadius, width }: any) => {
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

  return (
    <>
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
            source={require('../../../assets/naver_logo.png')}
            style={styles.image}
            onLoad={() => setLoading(false)}
          />
          {/* )} */}
        </TouchableOpacity>
      </View>
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
          <Image
            source={require('../../../assets/bg.png')}
            style={[styles.image, { borderRadius: 32 }]}
            onLoad={() => setImgLoading(false)}
          />
          {/* )} */}
        </Animated.View>
      </Modal>
    </>
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
    height: screenWidth / 5 / 3 - 8,
    flexDirection: 'column',
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
