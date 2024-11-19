import React, { Dispatch, SetStateAction } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ImageBoxContainer from '../molecules/ImageBoxContainer';
import Theme, {
  moderateScale,
  scale,
  verticalScale,
} from '../../utils/styleGuide';
import { clothesArray } from '../../api/types';
import { COLOR } from '../../layout/default';

interface ItemProps {
  item: clothesArray;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  setSelectTitle: Dispatch<SetStateAction<null | string>>;
  setSelected: Dispatch<SetStateAction<null | number>>;
}

const Item = ({
  item,
  setModalVisible,
  setSelectTitle,
  setSelected,
}: ItemProps) => {
  const handlePress = () => {
    setSelectTitle(item.name);
    setSelected(item.id);
    setModalVisible(true);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <ImageBoxContainer data={item} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    opacity: 0.9,
    marginTop: Theme.width * 5,
    marginHorizontal: Theme.width * 5,
    height: Theme.width * 80,
    width: Theme.width * 80,
    borderRadius: moderateScale(12),
    padding: scale(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    width: '80%',
    marginTop: verticalScale(8),
  },
  title: {
    fontSize: Theme.fontSizes.fontSizes12,
    textAlign: 'center',
    color: COLOR.black,
  },
});
