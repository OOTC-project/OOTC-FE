import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

interface OotdItemBoxProps {
    children?: React.ReactNode;
}

const OotdItemBox = ({ children }: OotdItemBoxProps) => {
    return <View style={[styles.container]}>{children}</View>;
};

export default OotdItemBox;
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#242424',
        opacity: 0.7,
        width: screenWidth / 1.5,
        height: screenHeight / 4,
        borderRadius: 18,
        padding: 5,
        marginTop: 10,
        borderColor: '#2e2e2e',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
