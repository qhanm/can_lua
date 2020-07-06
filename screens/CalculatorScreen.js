import React from 'react';
import {View} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import Calculator from '../components/Calculator';

export default function CalculatorScreen({navigation}) {
  return (
    <View>
      <CustomHeader navigation={navigation} />
      <Calculator />
    </View>
  );
}
