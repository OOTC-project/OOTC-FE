import { Image, Dimensions } from 'react-native';
import React from 'react';
import Theme from '../../utils/styleGuide';

const { width: screenWidth } = Dimensions.get('window');

interface AiAnimationProps {
  step: number;
}

const AiAnimation = ({ step }: AiAnimationProps) => {
  const getImageUri = () => {
    const imageUris: { [key: number]: string } = {
      0: 'https://github.com/user-attachments/assets/85b378fa-5c71-4ee7-b1a1-d04323df24da',
      1: 'https://github.com/user-attachments/assets/af4c95ee-e76d-4cdb-9164-6857e8a60aa0',
      2: 'https://github.com/user-attachments/assets/bfa5f2ee-45dd-46ba-947f-c70605558331',
      3: 'https://github.com/user-attachments/assets/82e59f03-290f-48a2-bd23-4c35c50dec3a',
    };
    return imageUris[step] || '';
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
