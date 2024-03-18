import { View, Text } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import ProfileBox from '../../components/organism/ProfileBox';
import EventBox from '../../components/organism/EventBox';
import SaveImages from '../../components/organism/SaveImages';

const MyPage = () => {
    return (
        <View style={styles.container}>
            <ProfileBox height={120} />
            <EventBox height={120} />
            <SaveImages />
        </View>
    );
};

export default MyPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
});
