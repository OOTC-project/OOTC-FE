import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const LoginPage = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.marginTop} />
        <View style={styles.ButtonBox}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="close"
              size={24}
              color="black"
              style={styles.right}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.logoFont}>OOTD</Text>
        <Text style={styles.logoDetail}>Your closet in my hand!</Text>
        <View style={styles.loginForm}>
          <Text>123</Text>
        </View>
      </View>
    </>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonBox: {
    width: '100%',
  },

  right: { textAlign: 'right', marginRight: 10 },

  marginTop: { marginBottom: 40 },
  logoFont: {
    fontSize: 80,
    fontWeight: '900',
    fontStyle: 'italic',
    marginTop: 40,
  },
  logoDetail: { fontSize: 20 },

  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  loginForm: { flex: 1, backgroundColor: 'red', marginTop: 50 },
});
