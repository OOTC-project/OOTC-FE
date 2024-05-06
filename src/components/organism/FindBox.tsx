import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import LoginBox from './LoginBox';
import InputBox from '../molecules/InputBox';
import Button from '../atoms/Button';
import FindIdPwBox from './FindIdPwBox';
import { scale } from '../../utils/styleGuide';
import useFormData from '../../utils/useFormData';

interface FindBoxProps {
  what: string;
}

export interface FindIdPwBoxDataType {
  name: string;
  id: string;
  email: string;
}

const FindBox = ({ what }: FindBoxProps) => {
  const { formData, handleChange } = useFormData(FindIdPwBoxData);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (
      (what === 'id' &&
        formData.email.length > 0 &&
        formData.email.length > 0) ||
      (what === 'pw' &&
        formData.email.length > 0 &&
        formData.id.length > 0 &&
        formData.email.length > 0)
    ) {
      setDisabled(false);
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {what === 'id' ? '아이디' : '비밀번호'} 찾기
      </Text>
      <FindIdPwBox
        what={what}
        formData={formData}
        handleChange={handleChange}
      />
      <Button
        text={what === 'id' ? '아이디 찾기' : '비밀번호 찾기'}
        color="#fff"
        backgroundColor={disabled ? 'gray' : '#1a63f6'}
        fontSize={scale(12)}
        disabled={disabled}
      />
    </View>
  );
};

export default FindBox;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: { fontSize: 32, marginBottom: 30 },
});

const FindIdPwBoxData: FindIdPwBoxDataType = {
  name: '',
  id: '',
  email: '',
};
