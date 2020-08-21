import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';

const Button = (props) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={props.onPress}
    style={[{
      backgroundColor: '#2999E9',
      width: '90%',
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4
    }, props.style]}>
  
      <Text style={{
        color: 'white',
        fontSize: 17
      }}>{props.text}</Text>
    
  </TouchableOpacity>
);

export { Button };