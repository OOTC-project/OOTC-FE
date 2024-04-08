import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import ItemSelectBox from '../../components/template/SelectBox';
import SelectImage from '../../components/organism/SelectImage';
const Select = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/backGround/default.png')}
        style={styles.background}
      >
        <View style={styles.marginTop} />
        <SelectImage />
        <View style={styles.mt}>
          <View style={styles.scrollView}>
            {DATA.map(item => (
              <View style={styles.boxBox} key={item.id}>
                <TouchableOpacity style={styles.box}>
                  <View style={styles.bb}>
                    <View style={styles.bbb}>
                      <Text>1</Text>
                    </View>
                    <View style={styles.bbb}>
                      <Text>2</Text>
                    </View>
                    <View style={styles.bbb}>
                      <Text>3</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <View style={styles.fontBox}>
                  <Text style={styles.boxTitle}>{item.title}</Text>
                </View>
              </View>
            ))}
            {/* <ItemSelectBox title="Bookmark" />
            <ItemSelectBox title="OUTER" />
            <ItemSelectBox title="TOP" />
            <ItemSelectBox title="BOTTOM" />
            <ItemSelectBox title="ETC" /> */}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Select;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  marginTop: { marginBottom: 40 },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  mt: { marginTop: 10 },
  scrollView: { width: screenWidth, flexDirection: 'row', flexWrap: 'wrap' },
  boxBox: {
    display: 'flex',
    alignItems: 'center',
    width: screenWidth / 4,
    flexDirection: 'column',
  },
  box: {
    backgroundColor: '#000',
    opacity: 0.7,
    marginTop: 15,
    marginHorizontal: 10,
    width: '80%',
    height: screenWidth / 5,
    borderRadius: 13,
    padding: 8,
    display: 'flex',
    alignItems: 'center',
  },
  fontBox: {
    width: '80%',
  },
  boxTitle: { fontSize: 16, textAlign: 'center', fontWeight: 'bold' },

  bb: {
    justifyContent: 'space-between',
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bbb: {
    display: 'flex',
    alignItems: 'center',
    width: '30%',
    height: screenWidth / 5 / 3 - 8,
    backgroundColor: 'blue',
    borderRadius: 5,
    flexDirection: 'column',
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
