import { View } from 'react-native';
import React from 'react';
import TextStyle from '../atoms/TextStyle';

const TitleBox = () => {
  return (
    <View>
      <TextStyle fontSize={30} color="white" fontWeight="600">
        OOTC
      </TextStyle>
    </View>
  );
};

export default TitleBox;
