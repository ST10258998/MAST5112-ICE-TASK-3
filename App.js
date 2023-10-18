// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CounterScreen from './CounterScreen';
import DisplayCounterScreen from './DisplayCounterScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="DisplayCounter" component={DisplayCounterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
