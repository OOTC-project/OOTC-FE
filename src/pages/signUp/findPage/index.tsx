import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { moderateScale, scale } from '../../../utils/styleGuide';
import FindBox from '../../../components/organism/FindBox';

interface FindPageProps {
  route: {
    params: {
      what: string;
    };
  };
}

const FindPage = ({ route }: FindPageProps) => {
  const navigation = useNavigation<NavigationProp<any>>();
  const { what } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.marginTop} />
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
