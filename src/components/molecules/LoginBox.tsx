import { View, Text } from 'react-native';
import React from 'react';
import Button from '../atoms/Button';
import { scale } from '../../utils';

const LoginButton = () => {
  return (
    <Button
      text="로그인"
      color="#fff"
      backgroundColor="#1a63f6"
      fontSize={scale(16)}
    />
  );
};

export default LoginButton;
