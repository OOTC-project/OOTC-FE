import { View, StyleSheet } from 'react-native';
import SaveImage from '../atoms/SaveImage';
import { GetCodyType } from '../../api/types';

interface SaveImagesProps {
  data?: GetCodyType;
}

const SaveImages = ({ data }: SaveImagesProps) => {
  return (
    <View style={styles.container}>
      <SaveImage index={0} data={data} />
    </View>
  );
};

export default SaveImages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
