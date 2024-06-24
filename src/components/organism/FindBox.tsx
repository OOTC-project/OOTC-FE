import { View, Text, StyleSheet, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import Button from '../atoms/Button';
import FindIdPwBox from './FindIdPwBox';
import { scale } from '../../utils/styleGuide';
import useFormData from '../../utils/useFormData';
import { useMutation } from 'react-query';
import { PostFindId, PatchResetPassword } from '../../api/auth';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types';
import axios from 'axios';

interface FindBoxProps {
  what: string;
}

export interface FindIdPwBoxDataType {
  name: string;
  id: string;
  email: string;
}

// Custom error type
interface ApiError {
  response: {
    status: number;
    data: {
      message: string;
    };
  };
}

const FindBox = ({ what }: FindBoxProps) => {
  const { formData, handleChange } =
    useFormData<FindIdPwBoxDataType>(FindIdPwBoxData);
  const [disabled, setDisabled] = useState(true);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

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

  const { mutate: findId } = useMutation(PostFindId, {
    onError: (error: unknown) => {
      if (axios.isAxiosError(error)) {
        Alert.alert(error.response?.data?.message || error.message);
      } else if (error instanceof Error) {
        Alert.alert(error.message);
      } else {
        Alert.alert('애러가 발생했어요!');
      }
    },
  });

  const { mutate: resetPassword } = useMutation(PatchResetPassword, {
    onSuccess: () => {
      Alert.alert(`이메일로 비밀번호가 전송되었습니다.`);
      navigation.goBack();
    },
    onError: (e: ApiError) => {
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
        onPress={
          what === 'id'
            ? () => findId({ name: formData.name, email: formData.email })
            : handleResetPassword
        }
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
