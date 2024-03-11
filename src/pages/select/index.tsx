import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import ItemSelectBox from '../../components/template/SelectBox';
import SelectImage from '../../components/organism/SelectImage';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Select = () => {
    return (
        <View style={styles.container}>
            <SelectImage />
            <View style={styles.mt}>
                <ItemSelectBox title="OUTER" />
                <ItemSelectBox title="TOP" />
                <ItemSelectBox title="BOTTOM" />
            </View>
        </View>
    );
};

export default Select;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    mt: { marginTop: 10 },
});
