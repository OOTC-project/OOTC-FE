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

interface ItemSelectBoxProps {
    title: string;
    select: { [key: string]: string | null };
    setSelect: any;
}

const ItemSelectBox = ({ title, select, setSelect }: ItemSelectBoxProps) => {
    const data = [
        { key: '1', screen: 'Screen 1' },
        { key: '2', screen: 'Screen 2' },
        { key: '3', screen: 'Screen 3' },
    ];

    const handlePress = (key: string) => {
        setSelect((prev: { [x: string]: string }) => {
            return {
                ...prev,
                [title.toLowerCase()]:
                    prev[title.toLowerCase()] === key ? null : key,
            };
        });
    };

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
                        <ItemBox
                            selected={select[title.toLowerCase()] === item.key}
                        >
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
