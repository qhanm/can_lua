import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';

export default function List(props) {
  return (
    <Icon
      name="bars"
      size={props.qhSize}
      color={props.qhColor}
      style={props.qhStyle}
    />
  );
}
