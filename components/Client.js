import React from 'react';
import {View} from 'react-native';
import ClientGroup from './ClientGroup';

export default function Client() {
  return (
    <View>
      <ClientGroup />
      <ClientGroup />
      <ClientGroup />
      <ClientGroup />
      <ClientGroup />
    </View>
  );
}
