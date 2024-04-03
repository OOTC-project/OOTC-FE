import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
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
          <ScrollView style={styles.scrollView}>
            <ItemSelectBox title="Bookmark" />
            <ItemSelectBox title="OUTER" />
            <ItemSelectBox title="TOP" />
            <ItemSelectBox title="BOTTOM" />
            <ItemSelectBox title="ETC" />
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Select;

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
    justifyContent: 'center',
  },
  mt: { marginTop: 10 },
  scrollView: {},
});
