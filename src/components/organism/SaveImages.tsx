import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import SaveImage from '../atoms/SaveImage';

const SaveImages = () => {
  return (
    <View style={styles.container}>
      <SaveImage index={0} />
    </View>
  );
};

export default SaveImages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
