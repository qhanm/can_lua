import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AddClientScreen from '../screens/AddClientScreen';
import CustomerScreen from '../screens/CustomerScreen';
import ClientSheetScreen from '../screens/ClientSheetScreen';
import CustomerResultScreen from '../screens/CustomerResultScreen';
import CalculatorScreen from '../screens/CalculatorScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} title="Home" />
        <Stack.Screen
          name="AddClientScreen"
          component={AddClientScreen}
          title="AddClientScreen"
        />
        <Stack.Screen name="CustomerScreen" component={CustomerScreen} />
        <Stack.Screen name="ClientSheetScreen" component={ClientSheetScreen} />
        <Stack.Screen name="CustomerResultScreen" component={CustomerResultScreen} />
        <Stack.Screen name="CalculatorScreen" component={CalculatorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
