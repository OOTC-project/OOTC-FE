import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import ItemSelectBox from '../../components/organism/SelectBox';

const Select = () => {
    return (
        <View style={styles.container}>
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
