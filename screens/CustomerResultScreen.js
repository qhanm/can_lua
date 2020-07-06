import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import Customer from '../components/Customer';
import CustomerResult from '../components/CustomerResult';

export default function CustomerResultScreen({navigation}) {
  return (
    <View>
      <CustomHeader navigation={navigation} />
      <CustomerResult navigation={navigation}/>
    </View>
  );
}
