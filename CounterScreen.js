import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CounterScreen = ({ navigation }) => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
    AsyncStorage.setItem('counterValue', (counter + 1).toString());
  };

  const navigateToDisplayCounter = () => {
    navigation.navigate('DisplayCounter');
  };

  useEffect(() => {
    AsyncStorage.getItem('counterValue').then((value) => {
      if (value) {
        setCounter(parseInt(value, 10));
      }
    });
  }, []);

  return (
    <View>
      <Text>Counter Value: {counter}</Text>
      <Button title="Increment" onPress={incrementCounter} />
      <Button title="Go to Display Counter" onPress={navigateToDisplayCounter} />
    </View>
  );
};

export default CounterScreen;
