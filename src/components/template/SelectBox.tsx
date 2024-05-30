import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import ItemBox from '../organism/ItemBox';
import { useDispatch, useSelector } from 'react-redux';
import {
  setBottom,
  setEtc,
  setOuter,
  setTop,
} from '../../redux/slice/itemSlice';
import { RootState } from '../../redux/reducer';

interface ItemSelectBoxProps {
  title: string;
}

const ItemSelectBox = ({ title }: ItemSelectBoxProps) => {
  const data: string | ArrayLike<any> | null | undefined = [
    { key: 1, screen: 'screen1' },
    { key: 2, screen: 'screen2' },
    { key: 3, screen: 'screen3' },
  ];

  const { counter: itemCounter } = useSelector((state: RootState) => state);

  const handlePress = (key: string) => {
    switch (title.toLowerCase()) {
      case 'top':
        if (itemCounter.top === key) {
          dispatch(setTop(null));
        } else {
          dispatch(setTop(key));
        }
        break;
      case 'outer':
        if (itemCounter.outer === key) {
          dispatch(setOuter(null));
        } else {
          dispatch(setOuter(key));
        }
        break;
      case 'bottom':
        if (itemCounter.bottom === key) {
          dispatch(setBottom(null));
        } else {
          dispatch(setBottom(key));
        }
        break;
      case 'etc':
        if (itemCounter.etc === key) {
          dispatch(setEtc(null));
        } else {
          dispatch(setEtc(key));
        }
        break;
      default:
        break;
    }
  };

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          title === 'Bookmark' ? { color: '#ba8d04' } : null,
        ]}
      >
        {title}
      </Text>
      {data && data.length > 0 ? (
        <FlatList
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={() => {
            console.log('Scrolling is End, select');
          }}
          contentContainerStyle={styles.scrollViewContent}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePress(item.key)}>
              <ItemBox key={item.key}>
                <Text>{item.screen}</Text>
              </ItemBox>
            </TouchableOpacity>
          )}
        />
      ) : (
        <View style={styles.noDataContainer}>
          <Text style={styles.noData}>OOTC에서 추가해주세요 :)</Text>
        </View>
      )}
    </View>
  );
};

export default ItemSelectBox;

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: { flex: 1, width: '100%', height: 250 },
  scrollViewContent: { alignItems: 'center' },
  title: {
    marginTop: 10,
    fontSize: 30,
    color: '#2b2929',
    fontWeight: '800',
    marginBottom: 10,
  },
  noData: { color: '#2b2929' },
  noDataContainer: {
    width: screenWidth,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
  },
});
