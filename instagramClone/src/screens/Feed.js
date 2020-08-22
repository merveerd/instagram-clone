import React, {useEffect} from 'react';
import {View, Text, FlatList, Image, Dimensions} from 'react-native';
import {connect} from 'react-redux';

import {getList, getStory} from '../actions';

import SignIn from './SignIn';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { LOCAL_LIST } from '../actions/types';

const {width, height} = Dimensions.get('window');
const Feed = (props) => {
  useEffect(() => {
    console.log('home')
    props.getList();
    props.getStory();
  }, []);

  const renderItem = ({item}) => {
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
              justifyContent: 'space-between'     
            }}>
            <View   style={{justifyContent : 'center'}}>
              <Text>{item.name}</Text>{
                item.location != '' &&
                ( <Text >{item.location}</Text>)
              }
             
            </View>
            <TouchableOpacity style={{marginRight: width/70}}>
              <Text style ={{fontSize: width/15, fontWeight: 'bold'}}>...</Text>
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
    <View style={{flex: 1}}>
      <FlatList
        style={{flex: 1}}
        data={props.list}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

const mapStateToProps = ({listResponse}) => {
  const {list, stories} = listResponse;
  return {list, stories};
};

export default connect(mapStateToProps, {getList, getStory})(Feed);
