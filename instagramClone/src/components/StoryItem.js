import React from 'react';
import {Text, View, Image, Dimensions, TouchableOpacity, StyleSheet} from 'react-native';
import * as RootNavigation from '../RootNavigation';

const {width, height} = Dimensions.get('window');

const StoryItem = (props) => {
  const onStoryPress = async () => {RootNavigation.navigate('ShowStory', {userId : props.userId})};

  return(
  <View>
    <TouchableOpacity onPress={onStoryPress}>
      <Image
        source={props.source}
        defaultSource={props.defaultSource}
        style={[styles.image, props.style]}
      />
      <Text style={styles.name}> {props.name}</Text>
    </TouchableOpacity>
  </View>
);
}

const styles = StyleSheet.create({
  image: {
    marginLeft: '3%',
    width: width * 0.18,
    height: width * 0.18,
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
