import React from 'react';
import Button from '../atoms/Button';
import Theme from '../../utils/styleGuide';
import { COLOR } from '../../layout/default';

interface LoginButtonProp {
  disabled: boolean;
  onPress?: () => void;
}

const LoginButton = ({ disabled, onPress }: LoginButtonProp) => {
  return (
    <Button
      text="로그인"
      color="#fff"
      backgroundColor={COLOR.blue}
      fontSize={Theme.fontSizes.fontSizes18}
      disabled={disabled}
      onPress={onPress}
    />
  );
};

export default LoginButton;
