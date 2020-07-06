import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableNativeFeedback,
  Keyboard,
} from 'react-native';
import QHColor from '../constant/Color';

const DismissKeyBoard = ({children}) => (
  <TouchableNativeFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableNativeFeedback>
);

export default class AddClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowError: false,
      name: '',
    };

    //this._showError = this._showError.bind(this);
    this.validateTextInput = this.validateTextInput.bind(this);
  }

  validateTextInput(value) {
    if (value.length >= 30) {
      this.setState({
        isShowError: true,
      });
      console.log(this.state.isShowError);
    } else {
      this.setState({
        isShowError: false,
      });
    }
    console.log(value.length);
  }

  _showError() {
    if (this.state.isShowError) {
      return (
        <View style={styles.containerBody}>
          <Text style={{color: QHColor.red}}>Tên nhóm không được vượt quá 30 ký tự</Text>
        </View>
      );
    } else {
      return null;
    }
  }
  render() {
    return (
      <DismissKeyBoard>
        <View style={styles.container}>
          <View style={[styles.containerBody]}>
            <Text style={styles.containerText}>Tên nhóm</Text>
            <TextInput
              onChangeText={this.validateTextInput}
              style={styles.containerInput}
              maxLength={30}
              placeholder="Tên nhóm không được để trống"
            />
          </View>
          {this._showError()}
          <View style={styles.containerBody}>
            <Text>
              Tên nhóm có thể là tên nghe, ngày cân lúa ..., Tên nhóm không quá
              30 ký tự
            </Text>
          </View>
          <TouchableOpacity
            style={[styles.containerBody, {backgroundColor: 'red'}]}>
            <Text style={{color: '#fff', alignItems: 'center'}}>Lưu</Text>
          </TouchableOpacity>
        </View>
      </DismissKeyBoard>
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
