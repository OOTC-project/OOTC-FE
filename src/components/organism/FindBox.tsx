import { View, Text, StyleSheet, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import LoginBox from './LoginBox';
import InputBox from '../molecules/InputBox';
import Button from '../atoms/Button';
import FindIdPwBox from './FindIdPwBox';
import { scale } from '../../utils/styleGuide';
import useFormData from '../../utils/useFormData';
import { useMutation, useQuery } from 'react-query';
import { GetFindId, PatchResetPassword } from '../../api/auth';
import { NavigationProp, useNavigation } from '@react-navigation/native';

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
  const navigation = useNavigation<NavigationProp<any>>();

  useEffect(() => {
    if (
      (what === 'id' &&
        formData.name.length > 0 &&
        formData.email.length > 0) ||
      (what === 'pw' &&
        formData.email.length > 0 &&
        formData.id.length > 0 &&
        formData.name.length > 0)
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [formData, what]);

  const [post, setPost] = useState(false);
  const { refetch } = useQuery(
    'GetFindId',
    () =>
      GetFindId({
        name: formData.name,
        email: formData.email,
      }),
    {
      staleTime: 15 * 60 * 1000,
      enabled: false,
      retry: 0,
      onSuccess: e => {
        setPost(false);
      },
    },
  );

  const { mutate: resetPassword } = useMutation(PatchResetPassword, {
    onSuccess: () => {
      Alert.alert(`이메일로 비밀번호가 전송되었습니다.`);
      navigation.goBack();
    },
    onError: (e: any) => {
      if (e.response.status === 404) {
        Alert.alert(`해당 계정의 정보가 없습니다.`);
      }
    },
  });

  const handleResetPassword = () => {
    resetPassword({
      name: formData.name,
      email: formData.email,
      userId: formData.id,
    });
  };

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
        onPress={what === 'id' ? () => refetch() : handleResetPassword}
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
