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
import LoginForm from '../../components/template/LoginForm';
import { moderateScale, scale, verticalScale } from '../../utils/styleGuide';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../types';

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
    backgroundColor: '#fff',
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
    fontSize: scale(70),
    fontWeight: '900',
    fontStyle: 'italic',
    marginTop: verticalScale(10),
  },
  logoDetail: {
    fontSize: 20,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
