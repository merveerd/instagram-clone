import React, {useEffect} from 'react';
import {View, Text, FlatList, Image, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {StoryContainer} from '../components';
import {getList, getStory} from '../actions';

import SignIn from './SignIn';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');
const Feed = (props) => {
  useEffect(() => {
    console.log('home');
    console.log('list', props.list);
    console.log('stories'. stories)
    props.getList();

    props.getStory();
  }, []);

  const onStoryPress = async () => { props.navigation.navigate('Story') };

  renderHeader = () => {
    return <StoryContainer stories= {props.stories} onStoryPress={onStoryPress} />;
  };


  const renderItem1 = ({item}) => {
    const source = item.image && item.image;
    return (
      <View
        style={{
          height: 200,
          width: '100%',
          margin: 10,
          flexDirection: 'column',
          backgroundColor: 'white',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
          <Image
            source={source}
            style={{marginRight: 10, height: 30, width: 30, borderRadius: 50}}
          />
          <View
            style={{
              width: '90%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{justifyContent: 'center'}}>
              <Text>{item.name}</Text>
              {item.location != '' && <Text>{item.location}</Text>}
            </View>
            <TouchableOpacity style={{marginRight: width / 70}}>
              <Text style={{fontSize: width / 15, fontWeight: 'bold'}}>
                ...
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Image
          defaultSource={require('../assets/dummy.png')}
          source={source}
          style={{height: '100%', width: '100%'}}
        />
      </View>
    );
  };
  return (
    <View style={{flex: 1, }}>
      {/* <View style={{flex: 1, flexDirection:'row', backgroundColor: 'black', alignItems:'center'}}>
      <FlatList
      data = {props.stories}
      renderItem = {renderStoryItem}
      keyExtractor = {(item) => item._id}
     >
      
      </FlatList>
      </View> */}
      <View style={{flex: 5}}>
        <FlatList
         ListHeaderComponent= {renderHeader}
          style={{flex: 5}}
          data={props.list}
          renderItem={renderItem1}
          keyExtractor={(item) => item._id}
        />
      </View>
    </View>
  );
};

const mapStateToProps = ({listResponse}) => {
  const {list, stories} = listResponse;
  return {list, stories};
};

export default connect(mapStateToProps, {getList, getStory})(Feed);
