import React from 'react';
import {View, Text} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import Client from '../components/Client';

export default function HomeScreen({navigation}) {
  return (
    <View>
      <CustomHeader title="Home" navigation={navigation} isShowAddIcon={true} />
      <Client navigation={navigation} />
    </View>
  );
}
