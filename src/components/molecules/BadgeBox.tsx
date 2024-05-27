import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Badge from '../atoms/Badge';

const BadgeBox = () => {
  const [select, setSelect] = useState('');
  return (
    <View style={styles.container}>
      <Badge
        text="Outer"
        select={select}
        setSelect={setSelect}
        fontSize={screenWidth < 340 ? 12 : 15}
      />
      <Badge
        text="Top"
        select={select}
        setSelect={setSelect}
        fontSize={screenWidth < 340 ? 12 : 15}
      />
      <Badge
        text="Bottom"
        select={select}
        setSelect={setSelect}
        fontSize={screenWidth < 340 ? 12 : 15}
      />
      <Badge
        text="Hat"
        select={select}
        setSelect={setSelect}
        fontSize={screenWidth < 340 ? 12 : 15}
      />
      <Badge
        text="shoes"
        select={select}
        setSelect={setSelect}
        fontSize={screenWidth < 340 ? 12 : 15}
      />
      <Badge
        text="Bag"
        select={select}
        setSelect={setSelect}
        fontSize={screenWidth < 340 ? 12 : 15}
      />
      <Badge
        text="Socks"
        select={select}
        setSelect={setSelect}
        fontSize={screenWidth < 340 ? 12 : 15}
      />
      <Badge
        text="Accessories"
        select={select}
        setSelect={setSelect}
        fontSize={screenWidth < 340 ? 12 : 15}
      />
      <Badge
        text="Glasses"
        select={select}
        setSelect={setSelect}
        fontSize={screenWidth < 340 ? 12 : 15}
      />
    </View>
  );
};

export default BadgeBox;

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
