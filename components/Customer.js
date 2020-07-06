import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Delete from './Icons/Delete';
import Date from './Icons/Date';
import qhColor from '../constant/Color';
import Calculator from './Icons/Calculator';
import Money from './Icons/Money';

export default function Customer({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.rowHeader}>
          <TouchableOpacity onPress={() => navigation.navigate('CustomerResultScreen')}>
            <Text>Customer 0001</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Delete qhColor="red" />
          </TouchableOpacity>
        </View>
        <View style={styles.rowBody}>
          <Date qhStyle={{paddingRight: 5}} />
          <Text style={{color: qhColor.blue}}>01-01-2020</Text>
        </View>
        <View style={styles.rowBody}>
          <Calculator qhSize={18} qhStyle={{paddingRight: 5}} />
          <Text>KL </Text>
          <Text> 0 </Text>
          <Text>Kg</Text>
          <Text> x </Text>
          <Text> 0</Text>
          <Text> VND</Text>
        </View>
        <View style={styles.rowBody}>
          <Money qhStyle={{paddingRight: 5}} />
          <Text style={{color: qhColor.blue}}>01-01-2020</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.rowHeader}>
          <Text>Customer 0001</Text>
          <TouchableOpacity>
            <Delete qhColor="red" />
          </TouchableOpacity>
        </View>
        <View style={styles.rowBody}>
          <Date qhStyle={{paddingRight: 5}} />
          <Text style={{color: qhColor.blue}}>01-01-2020</Text>
        </View>
        <View style={styles.rowBody}>
          <Calculator qhSize={18} qhStyle={{paddingRight: 5}} />
          <Text>KL </Text>
          <Text> 0 </Text>
          <Text>Kg</Text>
          <Text> x </Text>
          <Text> 0</Text>
          <Text> VND</Text>
        </View>
        <View style={styles.rowBody}>
          <Money qhStyle={{paddingRight: 5}} />
          <Text style={{color: qhColor.blue}}>01-01-2020</Text>
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
  },
  row: {
    width: '90%',
    borderColor: '#BDBDBD',
    borderWidth: 1,
    marginTop: 10,
  },
  rowHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderColor: 'red',
    borderBottomWidth: 1,
  },
  rowBody: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderColor: '#BDBDBD',
    borderBottomWidth: 1,
  },
};
