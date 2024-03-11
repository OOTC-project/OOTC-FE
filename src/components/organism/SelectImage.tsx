import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Modal,
    Pressable,
} from 'react-native';
import React, { useState } from 'react';
import Count from '../molecules/Count';

const SelectImage = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const handleModal = () => {
        setModalVisible(true);
    };

    return (
        <>
            <TouchableOpacity style={styles.container} onPress={handleModal}>
                <Count />
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <Text>취소</Text>
                </Pressable>
            </Modal>
        </>
    );
};

export default SelectImage;

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#a71c1c',
        backgroundColor: '#000000',
        position: 'absolute',
        bottom: 0,
        right: 0,
        marginBottom: 10,
        marginLeft: 20,
        zIndex: 999,
    },
});
