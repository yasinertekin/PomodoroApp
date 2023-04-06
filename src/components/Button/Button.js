import React from 'react-native';
import {TouchableOpacity, Text} from 'react-native';
import styles from './Button.style';

const Button = ({title, onPress, isBreak}) => {
  return (
    <TouchableOpacity
      style={[isBreak ? styles.second_button : styles.button]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
