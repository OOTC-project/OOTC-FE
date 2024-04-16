import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';

interface InputBoxProp {
  placeHolder?: string;
  title?: string;
}

const InputBox = ({ placeHolder, title }: InputBoxProp) => {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <TextInput
        placeholder={placeHolder}
        placeholderTextColor="grey"
        keyboardType="default"
        style={styles.textInput}
        value={name}
        onChangeText={text => {
          setName(text);
        }}
      />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: { paddingHorizontal: 10, marginBottom: 10 },
  titleText: { fontSize: 12, fontWeight: 'bold' },
  textInput: {
    paddingBottom: 5,
    color: '#2b2929',
    marginVertical: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#90909090',
    fontSize: 12,
  },
});
