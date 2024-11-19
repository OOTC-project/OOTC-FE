import React, { ReactNode } from 'react';
import { StyleSheet, ImageBackground, Dimensions } from 'react-native';
import MySafeAreaView from '../atoms/MySafeAreaView';

interface BackgroundSafeAreaViewProps {
  children: ReactNode;
  backgroundImage: string;
}

const BackgroundSafeAreaView: React.FC<BackgroundSafeAreaViewProps> = ({
  children,
  backgroundImage,
}) => {
  return (
    <ImageBackground
      source={{ uri: backgroundImage }}
      style={styles.background}
      resizeMode="cover"
    >
      <MySafeAreaView>{children}</MySafeAreaView>
    </ImageBackground>
  );
};

const { height: windowHeight, width: windowWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },
});

export default BackgroundSafeAreaView;
