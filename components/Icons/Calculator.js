import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';

export default function Calculator(props) {
  return (
    <Icon
      name="calculator"
      size={props.qhSize}
      color={props.qhColor}
      style={props.qhStyle}
    />
  );
}
