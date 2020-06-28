import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';

export default function Delete(props) {
  return (
    <Icon
      name="chevron-right"
      size={18}
      color="#3A01DF"
      style={props.qhStyle}
    />
  );
}
