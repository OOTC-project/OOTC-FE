import { View, StyleSheet, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import Badge from '../atoms/Badge';

interface BadgeBoxProps {
  photoData: {
    name: string;
    url: string;
    position: string;
    tag?: string;
    des?: string;
  };
  setPhotoData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      url: string;
      position: string;
      tag?: string;
      des?: string;
    }>
  >;
}

const BadgeBox = ({ photoData, setPhotoData }: BadgeBoxProps) => {
  const [select, setSelect] = useState('');

  useEffect(() => {
    setPhotoData(prev => {
      return { ...prev, tag: select };
    });
  }, [select]);

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
