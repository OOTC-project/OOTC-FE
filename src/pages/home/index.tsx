import {
    Alert,
    FlatList,
    ImageBackground,
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import TitleBox from '../../components/molecules/TitleBox';
import OotdItemContainer from '../../components/organism/OotdItemContainer';
import OotdItemBox from '../../components/organism/OotdItemBox';
import ItemBox from '../../components/organism/ItemBox';

interface ListType {
    key: string;
    screen: string;
}

const OotdPage = () => {
    const data = [
        { key: '1', screen: 'Screen 1' },
        { key: '2', screen: 'Screen 2' },
        { key: '3', screen: 'Screen 3' },
        { key: '4', screen: 'Screen 3' },
        { key: '5', screen: 'Screen 3' },
        { key: '6', screen: 'Screen 3' },
    ];
    const [list, setList] = useState(data);

    useEffect(() => {
        if (list.length === data.length) {
            setList((prevList) => [
                ...prevList,
                { key: new Date().toString(), screen: '+' },
            ]);
        }
    }, [list]);
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <View style={styles.container}>
                <OotdItemContainer>
                    <FlatList
                        showsHorizontalScrollIndicator={true}
                        onMomentumScrollEnd={() => {
                            console.log('Scrolling is End');
                        }}
                        contentContainerStyle={styles.scrollViewContent}
                        data={list}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                onPress={() => {
                                    index === list.length - 1
                                        ? setModalVisible(true)
                                        : null;
                                }}
                            >
                                <OotdItemBox>
                                    <Text style={styles.title}>
                                        {item.screen}
                                    </Text>
                                </OotdItemBox>
                            </TouchableOpacity>
                        )}
                    />
                </OotdItemContainer>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modal}>
                            <Pressable
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text>Hide Modal</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
        </>
    );
};

export default OotdPage;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        width: '100%',
        flexWrap: 'wrap',
        marginTop: 10,
        marginVertical: 40,
    },
    scrollViewContent: { alignItems: 'center' },
    title: {
        fontSize: 30,
        color: 'white',
        fontWeight: '600',
        marginBottom: 10,
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modal: {
        backgroundColor: '#121212',
        opacity: 0.95,
        width: '90%',
        height: '80%',
        borderRadius: 18,
        padding: 5,
    },
});
