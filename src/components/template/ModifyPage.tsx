import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions,
} from 'react-native';
import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, scale } from '../../utils/styleGuide';
import { RootStackParamList } from '../../types';

const { height: screenHeight } = Dimensions.get('window');

interface ModifyPageProps {}

const ModifyPage = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

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
      <Text>수정</Text>
    </View>
  );
};

export default ModifyPage;

const styles = StyleSheet.create({
  container: {},
  marginTop: { marginBottom: moderateScale(40) },

  ButtonBox: {
    width: '100%',
  },

  left: { textAlign: 'left', marginLeft: 10 },
});
