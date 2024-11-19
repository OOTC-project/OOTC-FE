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
    setPhotoData(prev => ({ ...prev, tag: select }));
  }, [select]);

  const badgeFontSize = screenWidth < 340 ? 12 : 15;

  const badgeTexts = [
    'Outer',
    'Top',
    'Bottom',
    'Hat',
    'Shoes',
    'Bag',
    'Socks',
    'Accessories',
    'Glasses',
  ];

  return (
    <View style={styles.container}>
      {badgeTexts.map(text => (
        <Badge
          key={text}
          text={text}
          select={select}
          setSelect={setSelect}
          fontSize={badgeFontSize}
        />
      ))}
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
