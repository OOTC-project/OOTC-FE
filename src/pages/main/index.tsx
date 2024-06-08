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

const Main = () => {
  return (
    <View style={styles.container}>
      <View style={styles.aiBox}>
        <Image
          source={require('../../../assets/ai.gif')}
          style={{
            width: screenWidth / 4,
            height: screenWidth / 4,
            margin: 10,
            marginRight: 15,
          }}
        />
        <Text style={styles.aiTitle}>AI 추천 받기 서비스</Text>

        <View style={styles.clothesBox}></View>
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
  aiTitle: { fontSize: scale(20), fontWeight: 'bold' },

  clothesBox: {
    borderWidth: 1,
    borderColor: '#000',
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
