import React, {useState, useEffect, useRef} from 'react';
import {Text, View} from 'react-native';
import styles from './App.style';
import Button from './components/Button/Button';
import Circle from './components/Circle/Circle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Pomodoro = () => {
  const [seconds, setSeconds] = useState(5); // 25 dakika
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const minutesRef = useRef(25);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => {
          if (seconds === 0) {
            if (isBreak) {
              setIsActive(false);
              setIsBreak(false);
              setSeconds(minutesRef.current * 60);
            } else {
              setIsBreak(true);
              setSeconds(300); // 5 dakika mola süresi
            }
            return seconds;
          } else {
            return seconds - 1;
          }
        });
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, isBreak]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsBreak(false);
    setSeconds(1500);
    minutesRef.current = 25;
  };

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' + minutes : minutes}:${
      seconds < 10 ? '0' + seconds : seconds
    }`;
  };

  return (
    <View
      style={[
        styles.container,
        isBreak ? styles.breakContainer : styles.workContainer,
      ]}>
      <Text style={styles.title}>Ready To Focus ?</Text>
      <Circle
        seconds={seconds}
        isBreak={isBreak}
        formatTime={formatTime}
        onPress={toggleTimer}
      />
      {isBreak ? (
        <Text style={styles.break}>Take a break!</Text>
      ) : (
        <Text style={styles.work}>Work session</Text>
      )}
      <Text style={styles.timer}>{formatTime(seconds)}</Text>

      <Button
        onPress={toggleTimer}
        isBreak={isBreak}
        title={
          isActive ? (
            <Icon name="pause" size={25} />
          ) : (
            <Icon name="play-arrow" size={25} />
          )
        }
      />
      <Button
        onPress={resetTimer}
        isBreak={isBreak}
        title={<MaterialCommunityIcons name="restart" size={25} />}
      />
    </View>
  );
};

export default Pomodoro;
