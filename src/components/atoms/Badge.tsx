import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { scale } from '../../utils/styleGuide';

interface BadgeProps {
  children?: React.ReactNode;
  color?: string;
  backgroundColor?: string;
  fontSize?: number;
  text?: string;
  borderRadius?: number;
  disabled?: boolean;
  select: string;
  setSelect: React.Dispatch<React.SetStateAction<string>>;
}

const Badge = ({
  children,
  color,
  backgroundColor,
  fontSize,
  text,
  borderRadius,
  disabled,
  select,
  setSelect,
}: BadgeProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, { backgroundColor, borderRadius }]}
      onPress={() => text && setSelect(text)}
    >
      <View
        style={[
          styles.button,
          {
            backgroundColor: select && select === text ? '#3c3c3c' : '#e8e2e2',
          },
        ]}
      >
        {text && (
          <Text
            style={[
              styles.buttonText,
              {
                color: select && select === text ? '#e8e2e2' : '#3c3c3c',
                fontSize,
              },
            ]}
          >
            {text}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Badge;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: scale(5),
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#e8e2e2',
    margin: 5,
    padding: 10,
    borderRadius: 8,
  },
  buttonText: { fontWeight: 'bold' },
});
