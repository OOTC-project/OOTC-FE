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
import { setBottom, setOuter, setTop } from '../../redux/slice/itemSlice';
import { RootState } from '../../redux/store';

interface ItemSelectBoxProps {
    title: string;
}

const ItemSelectBox = ({ title }: ItemSelectBoxProps) => {
    const data: string | ArrayLike<any> | null | undefined = [];

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
            default:
                break;
        }
    };

    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {data && data.length > 0 ? (
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={true}
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
                    <Text style={styles.noData}>OOTD에서 추가해주세요 :)</Text>
                </View>
            )}
        </View>
    );
};

export default ItemSelectBox;

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: { flex: 1, width: '100%' },
    scrollViewContent: { alignItems: 'center' },
    title: {
        fontSize: 30,
        color: 'white',
        fontWeight: '600',
        marginBottom: 10,
    },
    noData: { color: '#fff' },
    noDataContainer: {
        width: screenWidth,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%',
    },
});
