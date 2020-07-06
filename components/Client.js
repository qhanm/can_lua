import React from 'react';
import {View} from 'react-native';
import ClientGroup from './ClientGroup';

export default function Client({navigation}) {
  return (
    <View>
      <ClientGroup navigation={navigation} />
      <ClientGroup navigation={navigation} />
      <ClientGroup />
      <ClientGroup />
      <ClientGroup />
    </View>
  );
}
