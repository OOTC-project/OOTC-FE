import {
    Alert,
    FlatList,
    ImageBackground,
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import TitleBox from '../../components/molecules/TitleBox';
import OotdItemContainer from '../../components/organism/OotdItemContainer';
import OotdItemBox from '../../components/organism/OotdItemBox';
import ItemBox from '../../components/organism/ItemBox';
import ImagePickerExample from '../../components/organism/ImagePicker';

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
                            <View style={styles.modalBox}>
                                <TextInput
                                    placeholder="태그명을 입력해주세요."
                                    placeholderTextColor="grey"
                                    keyboardType="default"
                                    style={styles.textInput}
                                />
                                <ImagePickerExample />
                            </View>
                            <Pressable
                                style={styles.closeBtn}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.closeBtnText}>취소</Text>
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
    },
    modal: {
        backgroundColor: '#181818',
        opacity: 0.95,
        width: '100%',
        height: '100%',
        borderRadius: 18,
        padding: 10,
    },
    modalBox: { flex: 8 },
    closeBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 13,
        backgroundColor: '#000000',
    },
    closeBtnText: {
        color: '#fff',
        fontSize: 20,
    },
    textInput: {
        padding: 10,
        borderRadius: 13,
        backgroundColor: '#000000',
        color: '#fff',

        marginVertical: 5,
    },
});
