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
import SignUpBox from '../../components/organism/SignUpBox';
import { moderateScale, scale } from '../../utils/styleGuide';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../types';

const { height: screenHeight } = Dimensions.get('window');

const SignUpPage = () => {
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
      <SignUpBox />
    </View>
  );
};

export default SignUpPage;

const styles = StyleSheet.create({
  container: {},
  marginTop: { marginBottom: moderateScale(40) },

  ButtonBox: {
    width: '100%',
  },

  left: { textAlign: 'left', marginLeft: 10 },
});
