import React from 'react';
import {View, Text} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import AddClient from '../components/AddClient';

export default function AddClientScreen({navigation}) {
  return (
    <View>
      <CustomHeader
        title="Add Client"
        navigation={navigation}
        isShowAddIcon={false}
      />
      <AddClient />
    </View>
  );
}
