import {
  View,
  Text,
  Pressable,
  Modal,
  Animated,
  Dimensions,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, { useRef } from 'react';
import { BlurView } from 'expo-blur';
import ImageSelectBox from '../atoms/ImageSelectBox';
import { scale } from '../../utils/styleGuide';
import EmptyImagesBox from '../atoms/EmptyImagesBox';

interface CategoryItemsProps {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  select: number;
  setSelect: React.Dispatch<React.SetStateAction<number>>;
  selectTitle: null | string;
  setSelectTitle: React.Dispatch<React.SetStateAction<null | string>>;
}

const CategoryItems = ({
  modalVisible,
  setModalVisible,
  select,
  setSelect,
  selectTitle,
  setSelectTitle,
}: CategoryItemsProps) => {
  const scaleValue = useRef(new Animated.Value(0)).current;

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
      <Animated.View style={[styles.modal, { transform: [{ scale: 1 }] }]}>
        <View style={{ borderRadius: 30, overflow: 'hidden' }}>
          <BlurView
            intensity={100}
            tint="systemThickMaterialDark"
            style={styles.modalBox}
          >
            {true ? (
              <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 1].slice(0, 9)}
                numColumns={3}
                contentContainerStyle={{
                  justifyContent: 'center',
                }}
                renderItem={({ item }) => (
                  <ImageSelectBox
                    height={screenWidth / 4.5}
                    margin={screenWidth < 340 ? 1 : 2}
                    borderRadius={5}
                    select={select}
                    setSelect={setSelect}
                    id={item}
                  />
                )}
                // keyExtractor={(item, index) => index}
              />
            ) : (
              <EmptyImagesBox
                height={'100%'}
                margin={scale(0.3)}
                borderRadius={5}
                size={50}
                onPress={() => {}}
              />
            )}
          </BlurView>
        </View>

        <Text
          style={[
            styles.modalTitle,
            {
              fontSize: scale(selectTitle && selectTitle.length > 6 ? 45 : 55),
              color: select !== 0 ? '#332ed1' : '#212121',
            },
          ]}
        >
          {selectTitle}
        </Text>
      </Animated.View>
    </Modal>
  );
};

export default CategoryItems;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  modal: {
    width: screenWidth / 1.3,
    height: screenWidth / 1.3 + 10,
    left: (screenWidth - screenWidth / 1.3) / 2,
    top: (screenWidth / 1.3 + 10) / 2,
    position: 'absolute',
  },
  modalBox: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    borderRadius: 32,
    padding: 10,
  },
  modalTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#3c3c3c',
    marginTop: 5,
    fontStyle: 'italic',
  },
});
