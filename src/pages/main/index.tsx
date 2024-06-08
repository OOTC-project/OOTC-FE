import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { scale } from '../../utils/styleGuide';
import AiLoading from '../../components/organism/AiLoading';

const Main = () => {
  return (
    <View style={styles.container}>
      <View style={styles.aiBox}>
        <Text style={styles.aiTag}>AI OOTC</Text>
        <Text style={styles.aiDes}>
          AI 추천 서비스로서 날씨, 컨셉 등의 영향을 미칩니다.
        </Text>

        <View style={styles.clothesBox}>
          <AiLoading />
        </View>
        <TouchableOpacity>
          <Text style={styles.button}>AI 추천 받기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Main;

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  aiBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth / 1.2,
    height: screenHeight / 2,
  },
  aiTag: {
    fontSize: scale(50),
    fontWeight: 'bold',
    color: '#35ebf1',
    textShadowColor: '#2b2929',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  aiDes: {
    fontSize: scale(10),
    fontWeight: 'bold',
    margin: 10,
    color: '#2b2929',
  },

  clothesBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: '#2b2929',
    borderRadius: 12,
    margin: 5,
    width: screenWidth / 1.5,
    height: screenWidth / 1.5,
  },

  button: {
    margin: 10,
    backgroundColor: '#35ebf1',
    borderRadius: 12,
    padding: 5,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: '#2b2929',
  },
});
