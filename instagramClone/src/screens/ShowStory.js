import React from 'react';
import {View, Text, Image} from 'react-native';

const ShowStory = (props) => {

    return <View>
      <Text>Show Story {props.route.params.userId}</Text>
      {/* <Image source = {source}></Image> */}
    </View>
}

export default ShowStory;