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
    const data = [
        { key: '1', screen: 'Screen 1' },
        { key: '2', screen: 'Screen 2' },
        { key: '3', screen: 'Screen 3' },
    ];

    const items = useSelector((state: RootState) => state);

    const handlePress = (key: string) => {
        switch (title.toLowerCase()) {
            case 'top':
                if (items.counter.top === key) {
                    dispatch(setTop(null));
                } else {
                    dispatch(setTop(key));
                }
                break;
            case 'outer':
                if (items.counter.outer === key) {
                    dispatch(setOuter(null));
                } else {
                    dispatch(setOuter(key));
                }
                break;
            case 'bottom':
                if (items.counter.bottom === key) {
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
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={true}
                onMomentumScrollEnd={() => {
                    console.log('Scrolling is End');
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
});
