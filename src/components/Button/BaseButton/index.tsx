import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {ButtonProps} from '../types';

export default function Button({
  title,
  children,
  onPress,
  style,
  titleStyle,
  width,
  height,
  backgroundColor,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {width: width, height: height, backgroundColor: backgroundColor},
        style,
      ]}
      onPress={onPress}>
      {children ? (
        children
      ) : (
        <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
