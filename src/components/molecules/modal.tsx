import { View, Text, Modal, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';

const ModalBox = ({ modalVisible, setModalVisible, children }: any) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <Text>Hide sdsModal</Text>
                </Pressable>
                {/* {children}s */}
            </View>
        </Modal>
    );
};

export default ModalBox;

const styles = StyleSheet.create({
    centeredView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modal: {
        backgroundColor: '#121212',
        opacity: 0.95,
        width: '100%',
        height: '100%',
        borderRadius: 18,
        padding: 5,
    },
});
