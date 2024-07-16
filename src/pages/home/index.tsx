import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  ImageBackground,
  Animated,
  Alert,
} from 'react-native';
import SelectImage from '../../components/organism/SelectImage';
import Item from '../../components/organism/Item';
import { scale } from '../../utils/styleGuide';
import { SafeAreaView } from 'react-native-safe-area-context';
import NoticeSnackBar from '../../components/molecules/NoticeSnackBar';
import { useQuery } from 'react-query';
import { GetCategory } from '../../api/service';
import SelectSnackBar from '../../components/organism/SelectSnackBar';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducer';
import CategoryItemsModal from '../../components/organism/CategoryItems';
import BackgroundSafeAreaView from '../../components/molecules/BackgroundSafeAreaView';
import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import LoadingSpinner from '../../components/atoms/Loading';
import { RootStackParamList } from '../../types';

const Home = () => {
  const [selected, setSelected] = useState<null | number>(null);
  const [selectTitle, setSelectTitle] = useState<null | string>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [select, setSelect] = useState(0);
  const [noticeOn, setNoticeOn] = useState(true);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const loadingImage = require('../../../assets/splashW.png');
  const [loading, setLoading] = useState(false);
  const handleImageLoad = () => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  };

  const scaleValue = useRef(new Animated.Value(0)).current;
  const token = useSelector((state: RootState) => state.token.accessToken);

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

  useFocusEffect(
    React.useCallback(() => {
      if (refetchCount < 1) {
        refetch();
        setRefetchCount(prev => prev + 1);
      }
    }, [refetchCount, refetch]),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setSelect(0);
    }, 3000);

    return () => clearInterval(interval);
  }, [select]);

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
          <BackgroundSafeAreaView backgroundImage="https://ifh.cc/g/NqpJCd.jpg">
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

            <NoticeSnackBar
              snackbarVisible={noticeOn}
              setNoticeOn={setNoticeOn}
            />
            <SelectSnackBar select={select} />
          </BackgroundSafeAreaView>
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
  marginTop: { marginBottom: scale(10) },
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
    backgroundColor: '#fff',
  },
  loading: {
    flex: 1,
    width: '100%',
    zIndex: 999,
  },
  menuContainer: {
    flex: 1,
  },
  scrollView: { width: screenWidth, flexDirection: 'row', flexWrap: 'wrap' },
  boxBox: {
    display: 'flex',
    alignItems: 'center',
    width: screenWidth / 4,
    flexDirection: 'column',
    height: screenWidth / 4 + 15,
  },
});
