import React from 'react';
import ClientSheet from '../components/ClientSheet';
import {View} from 'react-native';
import CustomHeader from '../components/CustomHeader';

export default function ClientSheetScreen({navigation}) {
  return (
    <View>
      <CustomHeader navigation={navigation} />
      <ClientSheet />
    </View>
  );
}
