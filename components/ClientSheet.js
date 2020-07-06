import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

export default class ClientSheet extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.containerBody]}>
          <Text style={styles.containerText}>Nông dân</Text>
          <TextInput
            style={styles.containerInput}
            maxLength={30}
            placeholder="Nội dung tối đa 30 ký tự"
          />
        </View>
        <View style={[styles.containerBody]}>
          <Text style={styles.containerText}>Tên giống</Text>
          <TextInput
            style={styles.containerInput}
            maxLength={30}
            placeholder="TNội dung tối đa 30 ký tự"
          />
        </View>
        <View style={[styles.containerBody]}>
          <Text style={styles.containerText}>Giá mua</Text>
          <TextInput
            style={styles.containerInput}
            maxLength={6}
            placeholder="Giá mua tối đa 6 số"
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity
          style={[styles.containerBody, {backgroundColor: 'red'}]}>
          <Text style={{color: '#fff', alignItems: 'center'}}>Lưu</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  containerBody: {
    flexDirection: 'row',
    width: '90%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  containerText: {
    backgroundColor: 'red',
    height: 32,
    padding: 5,
    color: '#fff',
  },
  containerInput: {
    height: 32,
    padding: 5,
    width: 250,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
  buttonSave: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
    justifyContent: 'center',
    width: '90%',
    color: '#fff',
  },
};
