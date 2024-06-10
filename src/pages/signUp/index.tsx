import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import SignUpBox from '../../components/organism/SignUpBox';
import { moderateScale, scale } from '../../utils/styleGuide';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUpPage = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.ButtonBox}>
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
