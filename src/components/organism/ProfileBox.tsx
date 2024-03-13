import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import ProfileImage from '../molecules/ProfileImage';
import ProfileInfo from '../molecules/ProfileInfo';

interface ProfileBoxProps {
    width?: number;
    height?: number;
}
const ProfileBox = ({ width, height }: ProfileBoxProps) => {
    return (
        <View style={[styles.container, { width }]}>
            <ProfileImage
                height={height ? height - 10 : 0}
                width={height ? height - 10 : 0}
            />
            <ProfileInfo />
        </View>
    );
};

export default ProfileBox;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
    },
});
