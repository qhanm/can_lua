import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

export default function CustomerResult({navigation}) {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.rowHeader}>
            <Text style={{color: 'red', fontSize: 18}}>Kết quả</Text>
          </View>
          <View style={styles.rowBody}>
            <View style={styles.rowBody1}>
              <View style={styles.rawBodyLeft}>
                <Text>Ngày cân</Text>
              </View>
              <View style={styles.rawBodyRight}>
                <Text>01-01-2020</Text>
              </View>
            </View>
            <View style={styles.rowBody1}>
              <View style={styles.rawBodyLeft}>
                <Text>Họ tên</Text>
              </View>
              <View style={styles.rawBodyRight}>
                <Text>Quách Hoài Nam</Text>
              </View>
            </View>
            <View style={styles.rowBody1}>
              <View style={styles.rawBodyLeft}>
                <Text>Tên giống</Text>
              </View>
              <View style={styles.rawBodyRight}>
                <Text>Jasmin</Text>
              </View>
            </View>
            <View style={styles.rowBody1}>
              <View style={styles.rawBodyLeft}>
                <Text style={{color: 'red'}}>Tổng Khối lượng</Text>
              </View>
              <View style={styles.rawBodyRight1}>
                <TextInput style={styles.containerInput} placeholder="0" />
              </View>
              <View style={styles.rawBodyRight2}>
                <Text>Kg</Text>
              </View>
            </View>
            <View style={styles.rowBody1}>
              <View style={styles.rawBodyLeft}>
                <Text>Số lượng bao</Text>
              </View>
              <View style={styles.rawBodyRight1}>
                <TextInput style={styles.containerInput} placeholder="0" />
              </View>
              <View style={styles.rawBodyRight2}>
                <Text>Cái</Text>
              </View>
            </View>
            <View style={styles.rowBody1}>
              <View style={styles.rawBodyLeft}>
                <Text>KL bao bì</Text>
              </View>
              <View style={styles.rawBodyRight1}>
                <TextInput style={styles.containerInput} placeholder="0" />
              </View>
              <View style={styles.rawBodyRight2}>
                <Text>Cái</Text>
              </View>
            </View>
            <View style={styles.rowBody1}>
              <View style={styles.rawBodyLeft}>
                <Text>KL còn lại</Text>
              </View>
              <View style={styles.rawBodyRight1}>
                <TextInput style={styles.containerInput} placeholder="0" />
              </View>
              <View style={styles.rawBodyRight2}>
                <Text>KG</Text>
              </View>
            </View>
            <View style={styles.rowBody1}>
              <View style={styles.rawBodyLeft}>
                <Text style={{color: 'green'}}>Giá mua</Text>
              </View>
              <View style={styles.rawBodyRight1}>
                <TextInput style={styles.containerInput} placeholder="0" />
              </View>
              <View style={styles.rawBodyRight2}>
                <Text>VND</Text>
              </View>
            </View>
            <View style={styles.rowBody1}>
              <View style={styles.rawBodyLeft}>
                <Text style={{color: 'red'}}>Thành tiền</Text>
              </View>
              <View style={styles.rawBodyRight1}>
                <TextInput style={styles.containerInput} placeholder="0" />
              </View>
              <View style={styles.rawBodyRight2}>
                <Text>VND</Text>
              </View>
            </View>
            <TouchableOpacity
              style={[styles.rowBody1, styles.btnSave]}
              onPress={() => navigation.navigate('CalculatorScreen')}>
              <Text>Tiếp tục cân lúa</Text>
            </TouchableOpacity>
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
  },
  row: {
    marginTop: 20,
    width: '90%',
    borderWidth: 1,
    borderColor: '#BDBDBD',
  },
  rowHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
  },
  rowBody: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowBody1: {
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    width: '95%',
  },
  rawBodyLeft: {
    width: '40%',
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    alignItems: 'center',
    backgroundColor: '#CCCCCC',
  },
  rawBodyRight: {
    width: '60%',
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    backgroundColor: '#CCCCCC',
  },
  rawBodyRight1: {
    width: '50%',
    borderWidth: 1,
    borderColor: '#BDBDBD',
  },
  rawBodyRight2: {
    width: '10%',
    borderWidth: 1,
    borderColor: '#BDBDBD',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CCCCCC',
  },
  btnSave: {
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerInput: {
    height: 28,
    padding: 5,
    width: '100%',
    textAlign: 'right',
  },
};
