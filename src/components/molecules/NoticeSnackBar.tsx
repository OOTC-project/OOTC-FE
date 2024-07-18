import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useEffect, useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { scale } from '../../utils/styleGuide';
import { COLOR } from '../../layout/default';

interface NoticeSnackBarProps {
  snackbarVisible: boolean;
  setNoticeOn: React.Dispatch<React.SetStateAction<boolean>>;
}

const NoticeSnackBar = ({
  snackbarVisible,
  setNoticeOn,
}: NoticeSnackBarProps) => {
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (snackbarVisible) {
      Animated.timing(scaleValue, {
        toValue: 0.8,
        duration: 20,
        useNativeDriver: true,
      }).start();
    } else {
      scaleValue.setValue(0);
    }
  }, [snackbarVisible, scaleValue]);

  return (
    <Animated.View
      style={[styles.container, { transform: [{ scale: scaleValue }] }]}
    >
      <View style={styles.ButtonBox}>
        <TouchableOpacity onPress={() => setNoticeOn(false)}>
          <Ionicons name="close" size={24} color="#fff" style={styles.right} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>환영합니다. </Text>
      <Text style={styles.pointText}>아래 메뉴의 ITEMS를 클릭하여</Text>
      <Text style={styles.pointText}>아이템을 추가하세요!</Text>
      <Image
        source={require('../../../assets/welcome.gif')}
        style={{ width: 200 }}
      />
    </Animated.View>
  );
};

export default NoticeSnackBar;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: screenWidth * 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    alignItems: 'center',
    backgroundColor: COLOR.black,
    borderRadius: 20,
  },

  ButtonBox: {
    width: '100%',
  },

  right: { textAlign: 'right', marginRight: 10 },

  title: { fontSize: scale(18), color: COLOR.white, marginBottom: 10 },
  pointText: { fontSize: scale(15), color: COLOR.lightgrey },
  textBox: {
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: { fontSize: scale(13), color: COLOR.white },
});
