import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';
import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLOR } from '../../../layout/default';
import { RootStackParamList } from '../../../types';
import Theme, { scale, verticalScale } from '../../../utils/styleGuide';
import LoginForm from '../../template/LoginForm';

const { height: screenHeight } = Dimensions.get('window');

const LoginPage = () => {
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
        <TouchableOpacity onPress={() => navigation.navigate('MAIN')}>
          <Ionicons name="close" size={24} color="black" style={styles.right} />
        </TouchableOpacity>
      </View>
      <Text style={styles.logoFont}>OOTC</Text>
      <Text style={styles.logoDetail}>Your closet in my hand!</Text>

      <LoginForm />
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
    alignItems: 'center',
  },
  ButtonBox: {
    width: '100%',
  },
  right: {
    textAlign: 'right',
    marginRight: 10,
  },
  marginTop: {
    marginBottom: scale(10),
  },
  logoFont: {
    fontSize: Theme.fontSizes.fontSizes60,
    fontWeight: '900',
    fontStyle: 'italic',
    marginTop: verticalScale(10),
  },
  logoDetail: {
    fontSize: Theme.fontSizes.fontSizes18,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
