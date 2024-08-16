import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import ImageBoxContainer from '../molecules/ImageBoxContainer';
import Theme, {
  moderateScale,
  scale,
  verticalScale,
} from '../../utils/styleGuide';
import { clothesArray, GetCategoryType } from '../../api/types';
import { COLOR } from '../../layout/default';

interface ItemProps {
  item: clothesArray;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectTitle: React.Dispatch<React.SetStateAction<null | string>>;
  setSelected: React.Dispatch<React.SetStateAction<null | number>>;
}

const Item = ({
  item,
  setModalVisible,
  setSelectTitle,
  setSelected,
}: ItemProps) => {
  return (
    <>
      <TouchableOpacity
        style={styles.box}
        onPress={() => {
          setSelectTitle(item.name);
          setModalVisible(true), setSelected(item.id);
        }}
      >
        <ImageBoxContainer data={item} />
      </TouchableOpacity>
      <View style={styles.fontBox}>
        <Text style={styles.boxTitle}>{item.name}</Text>
      </View>
    </>
  );
};

export default Item;
const styles = StyleSheet.create({
  box: {
    opacity: 0.9,
    marginTop: Theme.width * 5,
    marginHorizontal: Theme.width * 5,
    height: Theme.width * 80,
    width: Theme.width * 80,
    borderRadius: 12,
    padding: 4,
    display: 'flex',
    alignItems: 'center',
  },
  fontBox: {
    width: '80%',
    flexWrap: 'nowrap',
  },
  boxTitle: {
    fontSize: Theme.fontSizes.fontSizes12,
    textAlign: 'center',
    // color: '#e8e2e2',
    color: COLOR.black,
  },
});
