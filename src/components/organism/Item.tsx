import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import ImageBoxContainer from '../molecules/ImageBoxContainer';
import { moderateScale, scale, verticalScale } from '../../utils/styleGuide';

const Item = ({ item, setModalVisible, setSelectTitle, setSelected }: any) => {
  return (
    <>
      <TouchableOpacity
        style={styles.box}
        onPress={() => {
          setSelectTitle(item.title);
          setModalVisible(true), setSelected(item.id);
        }}
      >
        <ImageBoxContainer />
      </TouchableOpacity>
      <View style={styles.fontBox}>
        <Text style={styles.boxTitle}>{item.title}</Text>
      </View>
    </>
  );
};

export default Item;
const styles = StyleSheet.create({
  box: {
    opacity: 0.7,
    marginTop: 15,
    marginHorizontal: 10,
    height: verticalScale(70),
    width: verticalScale(70),
    borderRadius: 13,
    padding: 4,
    display: 'flex',
    alignItems: 'center',
  },
  fontBox: {
    width: '80%',
    flexWrap: 'nowrap',
  },
  boxTitle: {
    fontSize: scale(12),
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#e8e2e2',
  },
});