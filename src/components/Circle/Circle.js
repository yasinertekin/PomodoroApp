// PomodoroCircle.js

import React from 'react';
import {Svg, Circle} from 'react-native-svg';
import styles from './Circle.style';
import {Text, View, TouchableOpacity} from 'react-native';
import Lottie from 'lottie-react-native';

const PomodoroCircle = ({seconds, isBreak, formatTime, onPress}) => {
  const calculateDashoffset = () => {
    return 565.48 - (565.48 * seconds) / (isBreak ? 300 : 1500);
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Svg style={styles.circle}>
          <Circle
            cx="100"
            cy="100"
            r="90"
            stroke={isBreak ? '#FF8020' : '#2F80ED'}
            strokeWidth="10"
            fill="none"
          />
          <Circle
            cx="100"
            cy="100"
            r="90"
            stroke="#E9E9ED"
            strokeWidth="10"
            strokeDasharray="565.48"
            strokeDashoffset={calculateDashoffset()}
            fill="none"
            transform="rotate(-90 100 100)"
          />
        </Svg>
      </View>

      <Lottie
        source={
          isBreak
            ? require('../../assets/89089-work-and-life-balance.json')
            : require('../../assets/work.json')
        }
        autoPlay
        loop
        style={styles.animation}
      />
    </TouchableOpacity>
  );
};

export default PomodoroCircle;
