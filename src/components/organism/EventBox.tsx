import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import ProfileInfo from '../molecules/ProfileInfo';
import EventTab from '../molecules/EventTab';

interface EventBoxProps {
  width?: number;
  height?: number;
}
const EventBox = ({ width, height }: EventBoxProps) => {
  return (
    <View style={[styles.container, { width }]}>
      <EventTab>추천수</EventTab>
      <EventTab>기록</EventTab>
      <EventTab>커뮤니티</EventTab>
    </View>
  );
};

export default EventBox;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#2b2929',
    backgroundColor: '#ffffffbd',
    padding: 5,
    paddingVertical: 20,
  },
});
