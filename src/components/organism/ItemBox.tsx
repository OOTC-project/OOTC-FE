import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLOR } from '../../layout/default';

interface ItemBoxProps {
  children?: React.ReactNode;
  selected?: boolean;
  key: string;
}

const ItemBox = ({ children, selected }: ItemBoxProps) => {
  return (
    <View style={[styles.container, selected && styles.selected]}>
      {children}
    </View>
  );
};
export default ItemBox;

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: '100%',
    borderRadius: 10,
    marginHorizontal: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLOR.black,
    borderWidth: 1,
    opacity: 0.7,
    backgroundColor: COLOR.black,
  },
  selected: {
    borderColor: COLOR.red,
    borderWidth: 1,
  },
});
