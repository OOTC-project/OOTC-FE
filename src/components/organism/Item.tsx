import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import ImageBoxContainer from '../molecules/ImageBoxContainer';

const Item = ({ item, setModalVisible, setSelected }: any) => {
  return (
    <>
      <TouchableOpacity
        style={styles.box}
        onPress={() => {
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
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  box: {
    opacity: 0.7,
    marginTop: 15,
    marginHorizontal: 10,
    width: '85%',
    height: screenWidth / 4.7,
    borderRadius: 13,
    padding: 4,
    display: 'flex',
    alignItems: 'center',
  },
  fontBox: {
    width: '80%',
  },
  boxTitle: { fontSize: 16, textAlign: 'center', fontWeight: 'bold' },
});
