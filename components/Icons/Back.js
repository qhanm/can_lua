import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';

export default function Back(props) {
  return (
    <Icon
      name="backspace"
      size={props.qhSize}
      color="#3A01DF"
      style={props.qhStyle}
    />
  );
}
