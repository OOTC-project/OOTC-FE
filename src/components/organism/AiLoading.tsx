import { Image, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';

const { width: screenWidth } = Dimensions.get('window');

const YourComponent = () => {
  const [step, setStep] = useState(0);

  const getImagePath = () => {
    switch (step) {
      case 0:
        return require('../../../assets/aiInit.gif');
      case 1:
        return require('../../../assets/aiLoading.gif');
      case 2:
        return require('../../../assets/aiSuccess.gif');
      default:
        return require('../../../assets/aiError.gif');
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(prevStep => (prevStep + 1) % 4);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

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

export default YourComponent;
