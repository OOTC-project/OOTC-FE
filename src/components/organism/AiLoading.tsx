import { Image, Dimensions } from 'react-native';
import React from 'react';
import Theme from '../../utils/styleGuide';

const { width: screenWidth } = Dimensions.get('window');

interface AiAnimationProps {
  step: number;
}

const AiAnimation = ({ step }: AiAnimationProps) => {
  const getImageUri = () => {
    switch (step) {
      case 0:
        return 'https://github.com/user-attachments/assets/85b378fa-5c71-4ee7-b1a1-d04323df24da';
      case 1:
        return 'https://github.com/user-attachments/assets/af4c95ee-e76d-4cdb-9164-6857e8a60aa0';
      case 2:
        return 'https://github.com/user-attachments/assets/bfa5f2ee-45dd-46ba-947f-c70605558331';
      case 3:
        return 'https://github.com/user-attachments/assets/82e59f03-290f-48a2-bd23-4c35c50dec3a';
      default:
        return '';
    }
  };

  return (
    <Image
      source={{ uri: getImageUri() }}
      style={{
        width: Theme.width * 200,
        height: Theme.width * 200,
      }}
    />
  );
};

export default AiAnimation;
