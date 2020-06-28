import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AddClientScreen from '../screens/AddClientScreen';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
