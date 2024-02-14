import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TitleBox from '../../components/molecules/TitleBox';
import OotdItemContainer from '../../components/organism/OotdItemContainer';
import OotdItemBox from '../../components/organism/OotdItemBox';

const OotdPage = () => {
    return (
        <>
            <TitleBox />
            <View style={styles.container}>
                <OotdItemContainer>
                    <OotdItemBox>
                        <Text>1</Text>
                    </OotdItemBox>
                    <OotdItemBox>
                        <Text>1</Text>
                    </OotdItemBox>
                </OotdItemContainer>
                <OotdItemContainer>
                    <OotdItemBox>
                        <Text>1</Text>
                    </OotdItemBox>
                </OotdItemContainer>
            </View>
        </>
    );
};

export default OotdPage;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        width: '100%',
        flexWrap: 'wrap',
        marginTop: 10,
    },
});
