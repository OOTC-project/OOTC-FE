import React from 'react';
import { View, StyleSheet } from 'react-native';

interface OotdItemContainerProps {
    children?: React.ReactNode;
}

const OotdItemContainer = ({ children }: OotdItemContainerProps) => {
    return <View style={[styles.container]}>{children}</View>;
};

export default OotdItemContainer;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: '100%',
        width: '100%',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
});
