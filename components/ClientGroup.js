import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Date from './Icons/Date';
import Delete from './Icons/Delete';
import Next from './Icons/Next';

export default function ClientGroup({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.containerRowHeader}>
          <Date qhStyle={{marginLeft: 5}} qhSize={18} />
          <Text style={styles.containerRowHeaderTextDate}>25/02/2020</Text>
        </View>
        <View style={styles.containerRowBody}>
          <TouchableOpacity style={styles.containerRowBodyDelete}>
            <Delete qhStyle={{marginRight: 5}} />
          </TouchableOpacity>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('CustomerScreen')}>
              <Text>Client - 0001</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Next qhStyle={{marginRight: 5}} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = {
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginBottom: 10,
    marginTop: 10,
  },
  row: {
    width: '90%',
    alignItems: 'center',
    borderColor: '#996600',
    borderWidth: 1,
  },
  containerRowHeader: {
    flexDirection: 'row',
    width: '100%',
    paddingTop: 5,
    paddingBottom: 5,
    color: 'red',
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  containerRowHeaderTextDate: {
    marginLeft: 5,
    color: '#3A01DF',
  },
  containerRowBody: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 5,
    marginTop: 5,
    borderColor: '#996600',
    borderWidth: 1,
  },
  containerRowBodyDelete: {
    backgroundColor: 'red',
    padding: 5,
  },
};
