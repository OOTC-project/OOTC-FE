import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions,
} from 'react-native';
import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../types';
import { moderateScale, scale } from '../../utils/styleGuide';
import FindBox from '../organism/FindBox';

const { height: screenHeight } = Dimensions.get('window');

interface FindPageProps {
  route: {
    params: {
      what: string;
    };
  };
}

const FindPage = ({ route }: FindPageProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { what } = route.params;

  return (
    <View style={styles.container}>
      {Platform.OS === 'android' && <SafeAreaView />}
      <View
        style={[
          styles.ButtonBox,
          Platform.OS === 'ios' && { marginTop: screenHeight / 40 },
        ]}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back-outline"
            size={scale(25)}
            color="black"
            style={styles.left}
          />
        </TouchableOpacity>
      </View>
      <FindBox what={what} />
    </View>
  );
};

export default FindPage;

const styles = StyleSheet.create({
  container: {},
  marginTop: { marginBottom: moderateScale(40) },

  ButtonBox: {
    width: '100%',
  },

  left: { textAlign: 'left', marginLeft: 10 },
});
