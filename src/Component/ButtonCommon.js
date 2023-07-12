import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors} from '../Utility/Constants';

const ButtonCommon = ({title, onPress, extraButtonStyle, titleStyle}) => {
  return (
    <TouchableOpacity
      style={[styles.button, extraButtonStyle]}
      onPress={onPress}>
      <Text style={[styles.buttonText, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.baseColor,
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
});

export default ButtonCommon;
