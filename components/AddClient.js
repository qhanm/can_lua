import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableNativeFeedback,
  Keyboard,
} from 'react-native';

const DismissKeyBoard = ({children}) => (
  <TouchableNativeFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableNativeFeedback>
);

function validateTextInput(value) {
  console.log(value);
}

export default function AddClient() {
  return (
    <DismissKeyBoard>
      <View style={styles.container}>
        <View style={[styles.containerBody]}>
          <Text style={styles.containerText}>Tên nhóm</Text>
          <TextInput
            onChangeText={(value) => this.validateTextInput(value)}
            style={styles.containerInput}
            maxLength={5}
            placeholder="Tên nhóm không được để trống"
          />
        </View>
        <View style={styles.containerBody}>
          <Text>
            Tên nhóm có thể là tên nghe, ngày cân lúa ..., Tên nhóm không quá 30
            ký tự
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
