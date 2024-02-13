import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import ItemSelectBox from '../../components/template/SelectBox';

const Select = () => {
    const [select, setSelect] = useState({
        top: null,
        outer: null,
        bottom: null,
    });
    return (
        <View style={styles.container}>
            <View style={styles.mt}>
                <ItemSelectBox
                    title="OUTER"
                    select={select}
                    setSelect={setSelect}
                />
                <ItemSelectBox
                    title="TOP"
                    select={select}
                    setSelect={setSelect}
                />
                <ItemSelectBox
                    title="BOTTOM"
                    select={select}
                    setSelect={setSelect}
                />
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
