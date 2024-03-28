import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import SaveImage from '../atoms/SaveImage';

const SaveImageBox: React.FC = () => {
  const data = [
    { key: '1', screen: 'Screen 1' },
    { key: '2', screen: 'Screen 2' },
    { key: '3', screen: 'Screen 3' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <SaveImage key={item.key} screen={item.screen} />
        )}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SaveImageBox;
