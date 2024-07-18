import {
  View,
  Text,
  Pressable,
  Modal,
  Animated,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { BlurView } from 'expo-blur';
import ImageSelectBox from '../atoms/ImageSelectBox';
import Theme, { scale } from '../../utils/styleGuide';
import EmptyImagesBox from '../atoms/EmptyImagesBox';
import { COLOR } from '../../layout/default';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types';

interface CategoryItemsProps {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  select: number;
  setSelect: React.Dispatch<React.SetStateAction<number>>;
  selectTitle: null | string;
  setSelectTitle: React.Dispatch<React.SetStateAction<null | string>>;
  data: any;
}

const CategoryItemsModal = ({
  modalVisible,
  setModalVisible,
  select,
  setSelect,
  selectTitle,
  setSelectTitle,
  data,
}: CategoryItemsProps) => {
  const filteredClothes =
    data &&
    data.data &&
    data.data
      .find((item: { name: string }) => item.name === selectTitle)
      ?.clothes.slice(0, 9);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePress = () => {
    navigation.navigate('ITEMS', { screen: 'ITEMS' });
  };

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
            <View style={styles.gridContainer}>
              {filteredClothes && filteredClothes.length > 0 ? (
                filteredClothes.map((clothes: any, index: number) => (
                  <ImageSelectBox
                    key={index}
                    height={screenWidth / 4.3}
                    margin={screenWidth < 340 ? 1 : 1}
                    borderRadius={5}
                    select={select}
                    setSelect={setSelect}
                    item={clothes}
                  />
                ))
              ) : (
                <EmptyImagesBox
                  height={'30%'}
                  margin={scale(0.3)}
                  borderRadius={5}
                  size={50}
                  onPress={handlePress}
                />
              )}
            </View>
          </BlurView>
        </View>

        <Text
          style={[
            styles.modalTitle,
            {
              fontSize:
                selectTitle && selectTitle.length > 6
                  ? Theme.fontSizes.fontSizes32
                  : Theme.fontSizes.fontSizes48,
              color: select !== 0 ? COLOR.blue : COLOR.black,
            },
          ]}
        >
          {selectTitle}
        </Text>
      </Animated.View>
    </Modal>
  );
};

export default CategoryItemsModal;

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
    padding: 5,
    minHeight: 290,
    backgroundColor: COLOR.black,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '100%',
  },
  modalTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLOR.black,
    marginTop: 5,
    fontStyle: 'italic',
  },
});
