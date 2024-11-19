import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import SnackBar from '../molecules/SnackBar';
import { COLOR } from '../../layout/default';
import Theme from '../../utils/styleGuide';

interface SelectSnackBarProps {
  select: number;
}

const SelectSnackBar = ({ select }: SelectSnackBarProps) => {
  return (
    <SnackBar
      snackbarVisible={select !== 0}
      position={Theme.height * 160}
      size={0.7}
    >
      <View style={styles.container}>
        <Text style={styles.text}>아이템이 선택되었습니다</Text>
      </View>
    </SnackBar>
  );
};

export default SelectSnackBar;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: Theme.height * 30,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: COLOR.white,
  },
});
