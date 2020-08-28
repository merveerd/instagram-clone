import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {StoryItem} from './StoryItem';

const StoryContainer = ({stories, userId}) => {
  //stories can be sent by global reducer connection but here, sent it in local way

  const renderStoryItem = ({item}) => {
    return (
      <StoryItem      
        source= {item.storyProfileImage}
        defaultSource={require('../assets/dummy.png')}
        name = {item.name}
        userId = {item.id}
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
        keyExtractor = {(item, index)=> index.toString()}
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
