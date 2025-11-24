import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

const CustomButton = ({ title, onPress, variant = 'primary', disabled = false }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles[variant],
        disabled && styles.disabled
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, styles[`${variant}Text`]]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;