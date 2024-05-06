import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';

interface InputBoxProp {
  placeHolder?: string;
  title?: string;
  autoFocus?: boolean;
  secureTextEntry?: boolean;
  formData?: string;
  name?: string;
  handleChange?: any;
}

const InputBox = ({
  autoFocus,
  secureTextEntry,
  placeHolder,
  title,
  name,
  handleChange,
}: InputBoxProp) => {
  const handleTextChange = (text: string) => {
    handleChange && name && handleChange(text, name);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <TextInput
        autoFocus={autoFocus}
        placeholder={placeHolder}
        placeholderTextColor="grey"
        keyboardType="default"
        style={styles.textInput}
        onChangeText={text => handleTextChange(text)}
        secureTextEntry={secureTextEntry}
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
