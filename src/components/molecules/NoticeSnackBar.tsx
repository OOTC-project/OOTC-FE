import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { scale } from '../../utils/styleGuide';
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

  const navigation = useNavigation<NavigationProp<any>>();

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

      <View style={styles.textBox}>
        <Text style={styles.text}>
          당신의 옷장 속에서 발견된 멋진 스타일을 공유합니다.
        </Text>
        <Text style={styles.text}>OOTC는 Outfit of the Closet의 줄임말로</Text>
        <Text style={styles.text}>일상적으로 사람들이 하루 동안 입은</Text>
        <Text style={styles.text}>
          의상이나 패션 스타일을 나타내는 데 사용됩니다.
        </Text>
      </View>
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
    backgroundColor: '#212121',
    borderRadius: 20,
  },

  ButtonBox: {
    width: '100%',
  },

  right: { textAlign: 'right', marginRight: 10 },

  title: { fontSize: scale(18), color: '#fff', marginBottom: 10 },
  pointText: { fontSize: scale(22), color: '#adb0c9' },
  textBox: {
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: { fontSize: scale(13), color: '#fff' },
});
