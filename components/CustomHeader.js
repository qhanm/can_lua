import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import List from './Icons/List';
import Add from './Icons/Add';
import Back from './Icons/Back';

export default function CustomHeader(props) {
  const navigation = props.navigation;
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <TouchableOpacity>
          <List qhSize={18} qhColor="white" qhStyle={{marginLeft: 10}} />
        </TouchableOpacity>
      </View>
      <View style={styles.containerHeader}>
        <Text style={styles.containerText}>{props.title}</Text>
      </View>
      <View style={styles.containerHeader}>
        {props.isShowAddIcon ? (
          <TouchableOpacity
            onPress={() => navigation.navigate('AddClientScreen')}>
            <Add qhColor="#3A01DF" qhSize={30} qhStyle={{marginLeft: 20}} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Back qhSize={18} qhColor="#fff" qhStyle={{marginLeft: 60}} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = {
  container: {
    backgroundColor: 'red',
    flexDirection: 'row',
    height: 50,
  },
  containerHeader: {
    flex: 1,
    justifyContent: 'center',
  },
  containerText: {
    alignItems: 'center',
    color: '#fff',
  },
};
