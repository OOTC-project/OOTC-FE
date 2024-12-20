import { View, StyleSheet } from 'react-native';
import { COLOR } from '../../layout/default';
import { ReactNode } from 'react';

interface OotdItemContainerProps {
  children?: ReactNode;
}

const OotdItemContainer = ({ children }: OotdItemContainerProps) => {
  return <View style={styles.container}>{children}</View>;
};

export default OotdItemContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.black,
    height: '100%',
    width: '100%',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
