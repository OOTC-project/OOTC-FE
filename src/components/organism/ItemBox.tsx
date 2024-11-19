import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { COLOR } from '../../layout/default';

interface ItemBoxProps {
  children?: ReactNode;
  selected?: boolean;
}

const ItemBox = ({ children, selected = false }: ItemBoxProps) => {
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
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLOR.black,
    borderWidth: 1,
    opacity: 0.7,
    backgroundColor: COLOR.black,
  },
  selected: {
    borderColor: COLOR.red,
    borderWidth: 2,
  },
});
