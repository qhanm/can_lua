import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';

export default function Date(props) {
  return (
    <Icon
      name="calendar-week"
      size={props.qhSize}
      color="#3A01DF"
      style={props.qhStyle}
    />
  );
}
