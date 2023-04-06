import {StyleSheet} from 'react-native';
import React from 'react';

export default StyleSheet.create({
  circle: {
    width: 200,
    height: 200,
  },

  circleStrokeDasharray: {
    stroke: '#E9E9ED',
    strokeWidth: 10,
    strokeDasharray: 565.48,
    strokeDashoffset: 565.48,
    fill: 'none',
    transform: 'rotate(-90 100 100)',
  },
  animation: {
    height: 200,
    width: 200,
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
