import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Modal,
    Pressable,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Count from '../molecules/Count';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const SelectImage = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const handleModal = () => {
        setModalVisible(true);
    };

    const { counter: itemCounter } = useSelector((state: RootState) => state);

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        let count = 0;

        if (itemCounter.outer !== null) {
            count++;
        }
        if (itemCounter.top !== null) {
            count++;
        }
        if (itemCounter.bottom !== null) {
            count++;
        }
        if (itemCounter.etc !== null) {
            count++;
        }
        setCounter(count);
    }, [itemCounter]);

    return (
        <>
            {counter > 0 ? (
                <>
                    <TouchableOpacity
                        style={styles.container}
                        onPress={handleModal}
                    >
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
                        <Pressable
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text>취소</Text>
                        </Pressable>
                    </Modal>
                </>
            ) : null}
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
        backgroundColor: '#2b2929',
        position: 'absolute',
        bottom: 0,
        right: 0,
        marginBottom: 10,
        marginLeft: 20,
        zIndex: 999,
    },
});
