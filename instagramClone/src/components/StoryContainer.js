import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {StoryItem} from './StoryItem';

const StoryContainer = ({stories, onStoryPress}) => {
  //stories can be sent by global reducer connection but here, sent it in local way

  const renderStoryItem = ({item}) => {
    const source = item.image && item.image;
    return (
      <StoryItem 
        onStoryPress={onStoryPress}// add name props
        source= {source}
        defaultSource={require('../assets/dummy.png')}
      ></StoryItem>
    );
  };

  return (
    <View>
      <FlatList
        horizontal={true}
        style={styles.container}
        data={stories}
        renderItem={renderStoryItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    marginTop: 10,
    paddingBottom: 10,
  },
});

export {StoryContainer};
