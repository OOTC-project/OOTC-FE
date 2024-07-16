import { View, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import InputBox from '../molecules/InputBox';
import { FindIdPwBoxDataType } from './FindBox';

interface FindIdPwBoxProp {
  what: null | string;
  formData: FindIdPwBoxDataType;
  handleChange: (value: string, name: string) => void;
}

const FindIdPwBox = ({ what, formData, handleChange }: FindIdPwBoxProp) => {
  return (
    <View style={styles.container}>
      <InputBox
        title="이름"
        name="name"
        placeHolder="예) ootc"
        autoFocus={true}
        formData={formData.name}
        handleChange={handleChange}
      />
      {what === 'pw' && (
        <InputBox
          title="아이디"
          name="id"
          placeHolder="예) thisIsOotcId"
          formData={formData.id}
          handleChange={handleChange}
        />
      )}
      <InputBox
        title="이메일"
        name="email"
        placeHolder="예) thisIsOotcId@gmail.com"
        formData={formData.email}
        handleChange={handleChange}
      />
    </View>
  );
};

export default FindIdPwBox;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
  },
});
