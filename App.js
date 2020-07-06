import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import HomeStack from './stacks/HomeStack';

import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(false);

const database_name = 'qhnam.db';
const database_version = '1.0';
const database_displayname = 'SQLite Test Database';
const database_size = 200000;
let db;

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  loadAndQueryDB = () => {
    db = SQLite.openDatabase(
      database_name,
      database_version,
      database_displayname,
      database_size,
      this.openCB,
      this.errorCB,
    );
    this.populateDatabase(db);
  };

  populateDatabase = (db) => {
    db.transaction(function (txn) {
      txn.executeSql('SELECT * FROM client_group ', [], function (tx, res) {
        console.log('items: ' + res.rows.length);
      });
    });
  };

  closeCB = () => {
    console.log('Database CLOSED');
  };

  errorCB = (err) => {
    console.log('error: ', err);
    return false;
  };
  closeDatabase = () => {
    if (db) {
      console.log('Closing database ...');
      db.close(this.closeCB, this.errorCB);
    } else {
    }
  };
  runDemo = () => {
    console.log('rin demo');
    this.loadAndQueryDB();
  };

  render() {
    return (
      <View>
        <HomeStack />
        <TouchableOpacity onPress={this.runDemo}>
          <Text>Click</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
