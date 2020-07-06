import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';

export default function Money(props) {
  return (
    <Icon
      name="money-bill-alt"
      size={props.qhSize}
      color={props.qhColor}
      style={props.qhStyle}
    />
  );
}
