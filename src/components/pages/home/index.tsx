import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  Animated,
  Alert,
  Text,
  ImageBackground,
} from 'react-native';
import SelectImage from '../../organism/SelectImage';
import Item from '../../organism/Item';
import { scale } from '../../../utils/styleGuide';
import NoticeSnackBar from '../../molecules/NoticeSnackBar';
import { useQuery } from 'react-query';
import { GetCategory } from '../../../api/service';
import SelectSnackBar from '../../organism/SelectSnackBar';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducer';
import CategoryItemsModal from '../../organism/CategoryItems';
import BackgroundSafeAreaView from '../../molecules/BackgroundSafeAreaView';
import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import LoadingSpinner from '../../atoms/Loading';
import { RootStackParamList } from '../../../types';
import { COLOR } from '../../../layout/default';

const Home = () => {
  const [, setSelected] = useState<null | number>(null);
  const [selectTitle, setSelectTitle] = useState<null | string>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [select, setSelect] = useState(0);
  const [noticeOn, setNoticeOn] = useState(true);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const loadingImage = require('../../../../assets/splashW.png');
  const [loading, setLoading] = useState(false);
  const handleImageLoad = () => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  };

  const scaleValue = useRef(new Animated.Value(0)).current;

  const [refetchCount, setRefetchCount] = useState(0);

  useEffect(() => {
    if (modalVisible) {
      Animated.timing(scaleValue, {
        toValue: 2,
        duration: 20,
        useNativeDriver: true,
      }).start();
    } else {
      scaleValue.setValue(0);
    }
  }, [modalVisible, scaleValue]);

  const { data, isLoading, refetch } = useQuery(
    'GetCategory',
    () => GetCategory({}),
    {
      retry: 1,
      onSuccess: () => {
        setRefetchCount(0);
      },
      onError: () => {
        Alert.alert(`로그인이 필요합니다.`);
        navigation.navigate('LoginPage');
        setRefetchCount(0);
      },
    },
  );

  // useFocusEffect(
  //   React.useCallback(() => {
  //     if (refetchCount < 1) {
  //       refetch();
  //       setRefetchCount(prev => prev + 1);
  //     }
  //   }, [refetchCount, refetch]),
  // );

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSelect(0);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [select]);

  const { counter: itemCounter } = useSelector((state: RootState) => state);

  useEffect(() => {
    if (modalVisible || itemCounter.length > 0) {
      setNoticeOn(false);
    }
  }, [modalVisible]);

  // useEffect(() => {
  //   refetch();
  // }, [token]);

  return (
    <TouchableWithoutFeedback>
      {loading ? (
        <>
          <SelectImage />
          <ImageBackground
            source={{ uri: 'https://ifh.cc/g/NqpJCd.jpg' }}
            style={styles.background}
            resizeMode="cover"
          >
            <View style={styles.menuContainer}>
              <View style={styles.scrollView}>
                {!isLoading && data ? (
                  data.data.map(item => (
                    <View style={styles.boxBox} key={item.id}>
                      <Item
                        item={item}
                        setSelected={setSelected}
                        setSelectTitle={setSelectTitle}
                        setModalVisible={setModalVisible}
                      />
                    </View>
                  ))
                ) : (
                  <View style={{ flex: 1 }}>
                    <LoadingSpinner />
                  </View>
                )}
                <CategoryItemsModal
                  data={data}
                  select={select}
                  setSelect={setSelect}
                  modalVisible={modalVisible}
                  setModalVisible={setModalVisible}
                  selectTitle={selectTitle}
                  setSelectTitle={setSelectTitle}
                />
              </View>
            </View>
          </ImageBackground>
          <NoticeSnackBar
            snackbarVisible={noticeOn}
            setNoticeOn={setNoticeOn}
          />
          <SelectSnackBar select={select} />
        </>
      ) : (
        <View style={styles.loadingBackground}>
          <Image
            source={loadingImage}
            style={styles.loading}
            onLoad={handleImageLoad}
            resizeMode="contain"
          />
        </View>
      )}
    </TouchableWithoutFeedback>
  );
};

export default Home;

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  loadingBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: COLOR.white,
  },
  loading: {
    flex: 1,
    width: '100%',
    zIndex: 999,
  },
  menuContainer: {},
  scrollView: { width: screenWidth, flexDirection: 'row', flexWrap: 'wrap' },
  boxBox: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
});
