import React from 'react';
import {Text, View, Image, Dimensions, TouchableOpacity, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

const StoryItem = (props) => (
  <View>
    <TouchableOpacity onPress={props.onStoryPress}>
      <Image
        source={props.source}
        defaultSource={props.defaultSource}
        style={[styles.image, props.style]}
      />
      <Text style={styles.name}> name</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  image: {
    marginLeft: '3%',
    width: width * 0.18,
    height: width * 0.18,
    resizeMode: 'contain',
    borderWidth: 1,
    borderColor: 'pink',
    borderRadius: 100,
  },
  name: {
    fontSize: 12,
    marginTop: 5,
  },
});

export  {StoryItem};
