import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import Customer from '../components/Customer';

export default function CustomerScreen({navigation}) {
  return (
    <View>
      <CustomHeader navigation={navigation} title="Customer"/>
      <TouchableOpacity onPress={() => navigation.navigate('ClientSheetScreen')}>
        <Text>Tao moi</Text>
      </TouchableOpacity>
      <Customer navigation={navigation} />
    </View>
  );
}
