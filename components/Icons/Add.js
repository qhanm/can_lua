import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';

export default function Add(props) {
  return (
    <Icon
      name="plus-circle"
      size={props.qhSize}
      color={props.qhColor}
      style={props.qhStyle}
    />
  );
}
