import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CustomerScreen from '../screens/CustomerScreen';
import ClientSheetScreen from '../screens/ClientSheetScreen';

const Stack = createStackNavigator();

export default function CustomerStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="CustomerScreen" component={CustomerScreen} />
        <Stack.Screen name="ClientSheetScreen" component={ClientSheetScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
