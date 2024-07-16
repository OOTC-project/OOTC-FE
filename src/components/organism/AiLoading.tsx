import { Image, Dimensions } from 'react-native';
import React from 'react';

const { width: screenWidth } = Dimensions.get('window');

interface AiAnimationProps {
  step: number;
}

const AiAnimation = ({ step }: AiAnimationProps) => {
  const getImagePath = () => {
    switch (step) {
      case 0:
        return require('../../../assets/aiInit.gif');
      case 1:
        return require('../../../assets/aiLoading.gif');
      case 2:
        return require('../../../assets/aiSuccess.gif');
      case 3:
        return require('../../../assets/aiError.gif');
    }
  };

  return (
    <Image
      source={getImagePath()}
      style={{
        width: screenWidth / 2,
        height: screenWidth / 2,
      }}
    />
  );
};

export default AiAnimation;
