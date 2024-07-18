import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { COLOR } from '../../layout/default';
import Theme from '../../utils/styleGuide';

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
  titleText: {
    fontSize: Theme.fontSizes.fontSizes16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  textInput: {
    color: COLOR.black,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: COLOR.black,
    fontSize: Theme.fontSizes.fontSizes16,
    height: Theme.height * 30,
  },
});
