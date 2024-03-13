import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ItemBoxProps {
    children?: React.ReactNode;
    selected?: boolean;
    key: string;
}

const ItemBox = ({ children, selected }: ItemBoxProps) => {
    return (
        <View style={[styles.container, selected && styles.selected]}>
            {children}
        </View>
    );
};
export default ItemBox;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#101010',
        width: 200,
        height: '100%',
        borderRadius: 10,
        marginHorizontal: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    selected: {
        borderColor: 'red',
        borderWidth: 1,
    },
});
