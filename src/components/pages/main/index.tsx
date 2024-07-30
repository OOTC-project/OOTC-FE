import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import { useQuery } from 'react-query';
import * as Location from 'expo-location';
import { COLOR } from '../../../layout/default';
import { GetOpenAi } from '../../../api/service';
import AiAnimation from '../../organism/AiLoading';
import LoadingSpinner from '../../atoms/Loading';
import Theme, { scale } from '../../../utils/styleGuide';

const Main = () => {
  const [step, setStep] = useState(0);
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const determineCityAndCountry = (latitude: number, longitude: number) => {
    const cities = [
      { name: 'seoul', lat: [37.4, 37.7], lng: [126.8, 127.2] },
      { name: 'busan', lat: [35.0, 35.3], lng: [128.8, 129.3] },
      { name: 'incheon', lat: [37.3, 37.6], lng: [126.4, 126.8] },
      { name: 'daegu', lat: [35.8, 36.0], lng: [128.5, 128.8] },
      { name: 'daejeon', lat: [36.2, 36.5], lng: [127.3, 127.5] },
      { name: 'gwangju', lat: [35.1, 35.3], lng: [126.8, 127.0] },
      { name: 'ulsan', lat: [35.5, 35.7], lng: [129.2, 129.4] },
      { name: 'sejong', lat: [36.4, 36.6], lng: [127.2, 127.4] },
      { name: 'suwon', lat: [37.2, 37.3], lng: [126.9, 127.1] },
      { name: 'cheongju', lat: [36.5, 36.7], lng: [127.4, 127.5] },
      { name: 'chuncheon', lat: [37.8, 37.9], lng: [127.7, 127.8] },
      { name: 'jeonju', lat: [35.8, 35.9], lng: [127.1, 127.2] },
      { name: 'wonju', lat: [37.3, 37.4], lng: [127.9, 128.0] },
      { name: 'changwon', lat: [35.2, 35.3], lng: [128.6, 128.7] },
      { name: 'andong', lat: [36.5, 36.6], lng: [128.7, 128.8] },
      { name: 'jeju', lat: [33.4, 33.5], lng: [126.5, 126.6] },
    ];

    for (let city of cities) {
      if (
        latitude >= city.lat[0] &&
        latitude <= city.lat[1] &&
        longitude >= city.lng[0] &&
        longitude <= city.lng[1]
      ) {
        return { city: city.name, country: 'KR' };
      }
    }

    // 제주도 전체 범위 확인
    if (
      latitude >= 33.0 &&
      latitude <= 34.0 &&
      longitude >= 126.0 &&
      longitude <= 127.0
    ) {
      return { city: 'jeju', country: 'KR' };
    }

    // 위의 도시들에 해당하지 않는 경우
    return { city: 'seoul', country: 'KR' };
  };

  const { data, refetch } = useQuery(
    'GetOpenAi',
    () => GetOpenAi({ city, country: 'KR' }),
    {
      retry: 1,
      enabled: false,
      onSuccess: e => {
        setStep(2);
      },
      onError: () => {
        setStep(3);
      },
    },
  );

  const handleAiRecommendation = async () => {
    setStep(1);
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        '위치 권한 필요',
        '위치 기반 AI 추천 서비스를 이용하려면 위치 서비스를 활성화해주세요.',
        [
          {
            text: '확인',
            onPress: async () => {
              const { status: newStatus } =
                await Location.requestForegroundPermissionsAsync();
              if (newStatus === 'granted') {
                await fetchLocationAndData();
              }
            },
          },
        ],
      );
    } else {
      await fetchLocationAndData();
    }
  };

  const fetchLocationAndData = async () => {
    try {
      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      const { city: determinedCity, country: determinedCountry } =
        determineCityAndCountry(latitude, longitude);

      setCity(determinedCity);
      setCountry(determinedCountry);

      // 위치 정보를 설정한 후 데이터 가져오기
      refetch();
    } catch (error) {
      console.error('Error fetching location:', error);
      Alert.alert('오류', '위치 정보를 가져오는 데 실패했습니다.');
    }
  };

  const { englishPart, koreanPart } = (() => {
    const content = data?.data?.message?.content || '';

    const koreanStartIndex = content.search(/[\uac00-\ud7af]/);

    let englishText = '';
    let koreanText = '';

    if (koreanStartIndex !== -1) {
      englishText = content.substring(0, koreanStartIndex).trim();
      koreanText = content.substring(koreanStartIndex).trim();
    } else {
      englishText = content.trim();
      koreanText = '';
    }

    const cleanedKoreanText = koreanText
      .replace(/^(Korean:|한국어:)\s*/, '')
      .trim();

    return {
      englishPart: englishText,
      koreanPart: cleanedKoreanText,
    };
  })();

  return (
    <View style={styles.container}>
      <View style={styles.aiBox}>
        <Text style={styles.aiTag}>AI OOTC</Text>
        <Text style={styles.aiDescription}>
          AI 추천 서비스로서 날씨, 컨셉 등의 영향을 미칩니다.
        </Text>
        <View style={styles.clothesBox}>
          <AiAnimation step={step} />
        </View>
        {step > 1 && data?.data.message.content ? (
          <ScrollView style={styles.solutionBox}>
            <Text style={styles.solution}>{koreanPart}</Text>
          </ScrollView>
        ) : null}
        {step === 1 ? (
          <LoadingSpinner />
        ) : (
          <TouchableOpacity
            onPress={handleAiRecommendation}
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              {step === 3 ? '다시 추천 받기' : 'AI 추천 받기'}
            </Text>
          </TouchableOpacity>
        )}
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
    backgroundColor: COLOR.white,
  },
  aiBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth / 1.2,
    height: screenHeight / 2,
  },
  aiTag: {
    fontSize: Theme.fontSizes.fontSizes60,
    fontWeight: 'bold',
    color: COLOR.blue,
    textShadowColor: COLOR.black,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  aiDescription: {
    fontSize: Theme.fontSizes.fontSizes12,
    fontWeight: 'bold',
    margin: 10,
    color: COLOR.black,
  },
  clothesBox: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    margin: 5,
    width: screenWidth / 1.5,
    height: screenWidth / 1.5,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: Theme.width * 120,
    height: Theme.height * 40,
    backgroundColor: COLOR.blue,
    borderRadius: 12,
    padding: 5,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: '#2b2929',
  },
  buttonText: {
    color: COLOR.white,
  },
  solutionBox: {
    borderColor: COLOR.darkgray,
    borderWidth: 1,
    padding: 3,
    borderRadius: 8,
    width: screenWidth / 1.5,
    maxHeight: screenWidth / 3,
  },
  solution: {
    fontSize: Theme.fontSizes.fontSizes12,
    color: COLOR.black,
    padding: 10,
  },
});
