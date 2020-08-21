import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';

const HelperTexts = (props) => (
    <TouchableOpacity
    style={{marginTop: 10}}
    onPress={() => props.onPress}>
    <Text style = {{color: 'gray'}}> {props.firstText}
    <Text style={{ fontWeight : 'bold', color: 'black'}}>{props.secondText} </Text></Text>
  </TouchableOpacity>
);

export { HelperTexts };