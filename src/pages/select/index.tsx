import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import ItemSelectBox from '../../components/template/SelectBox';
import SelectImage from '../../components/organism/SelectImage';
const Select = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/backGround/default.png')}
                style={styles.background}
            >
                <SelectImage />
                <View style={styles.mt}>
                    <ItemSelectBox title="OUTER" />
                    <ItemSelectBox title="TOP" />
                    <ItemSelectBox title="BOTTOM" />
                </View>
            </ImageBackground>
        </View>
    );
};

export default Select;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    mt: { marginTop: 10 },
});
