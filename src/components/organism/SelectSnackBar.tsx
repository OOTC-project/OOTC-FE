import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import SnackBar from '../molecules/SnackBar';

interface SelectSnackBarProps {
  select: number;
}

const SelectSnackBar = ({ select }: SelectSnackBarProps) => {
  return (
    <SnackBar
      snackbarVisible={select !== 0 ? true : false}
      position={170}
      size={0.8}
    >
      <View style={styles.container}>
        <Text style={styles.text}>아이템이 선택되었습니다</Text>
        {/* <View
          style={{
            flexDirection: 'row',
            padding: 5,
          }}
        >
          {[0, 1, 2, 3, 4].map((e, index) => (
            <View style={styles.itemBox}></View>
          ))}
        </View> */}
      </View>
    </SnackBar>
  );
};

export default SelectSnackBar;

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    // height: screenHeight / 7,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: { textAlign: 'center', fontSize: 18, color: '#fff' },
  itemBox: {
    backgroundColor: 'blue',
    width: screenWidth / 6.5,
    height: screenWidth / 6.5,
    margin: 5,
    borderRadius: 5,
  },
});
