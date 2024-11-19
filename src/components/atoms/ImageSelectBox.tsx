import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Modal,
  Pressable,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slice/itemSlice';
import { COLOR } from '../../layout/default';

// Define the interface for the component props
interface ImageSelectBoxProps {
  height: number;
  margin: number;
  borderRadius: number;
  select: number;
  setSelect: React.Dispatch<React.SetStateAction<number>>;
  item: {
    id: number;
    clothesImg: string;
  };
}

const ImageSelectBox = ({
  height,
  margin,
  borderRadius,
  select,
  setSelect,
  item,
}: ImageSelectBoxProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [imgLoading, setImgLoading] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);

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

    const newItem = { id, img };
    dispatch(addItem(newItem));
  };

  return (
    <View style={[styles.container, { height, margin, borderRadius }]}>
      <TouchableOpacity
        style={styles.image}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Image
          source={{
            uri: item.clothesImg,
          }}
          style={[styles.image, { borderRadius: 13 }]}
          onLoad={() => setLoading(false)}
        />
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
          <TouchableOpacity
            onPress={() => handleClick(item.id, item.clothesImg)}
          >
            <Image
              source={{
                uri: item.clothesImg,
              }}
              style={[
                styles.image,
                {
                  borderRadius: 32,
                  borderWidth: 4,
                  borderColor: select !== 0 ? COLOR.blue : COLOR.black,
                },
              ]}
              onLoad={() => setImgLoading(false)}
            />
          </TouchableOpacity>
        </Animated.View>
      </Modal>
    </View>
  );
};

export default ImageSelectBox;

const screenWidth = Dimensions.get('window').width;

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
