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
console.log(screenWidth);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        width: screenWidth / 2.1,
        height: 160,
        borderRadius: 10,
        margin: 2,
        borderColor: '#2e2e2e',
    },
});
