import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import SignUpBox from '../../components/organism/SignUpBox';

const SignUpPage = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={styles.container}>
      <View style={styles.marginTop} />
      <View style={styles.ButtonBox}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back-outline"
            size={45}
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
  marginTop: { marginBottom: 40 },

  ButtonBox: {
    width: '100%',
  },

  left: { textAlign: 'left', marginLeft: 10 },
});
