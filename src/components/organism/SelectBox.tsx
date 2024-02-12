import React from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import TitleBox from '../molecules/TitleBox';
import TextStyle from '../atoms/TextStyle';

interface ItemSelectBoxProps {
    title: string;
}

const ItemSelectBox = ({ title }: ItemSelectBoxProps) => {
    const data = [
        { key: '1', screen: 'Screen 1' },
        { key: '2', screen: 'Screen 2' },
        { key: '3', screen: 'Screen 3' },
    ];

    return (
        <View style={styles.container}>
            <TextStyle fontSize={30} color="white" fontWeight="600">
                {title}
            </TextStyle>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={true}
                onMomentumScrollEnd={() => {
                    console.log('Scrolling is End');
                }}
                contentContainerStyle={styles.scrollViewContent}
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.viewStyle}>
                        <Text style={styles.textStyle}>{item.screen}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default ItemSelectBox;

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: { flex: 1, width: '100%' },
    scrollViewContent: { alignItems: 'center' },
    viewStyle: {
        flex: 1,
        width: screenWidth,
        height: screenHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 20,
        padding: 15,
        color: 'white',
        textAlign: 'center',
    },
});
