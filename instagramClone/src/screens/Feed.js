import React, {useEffect} from 'react';
import {View, Text, FlatList, Image, Dimensions} from 'react-native';
import {connect} from 'react-redux';

import {getList, getStory} from '../actions';

import SignIn from './SignIn';
import { TouchableOpacity } from 'react-native-gesture-handler';


const {width, height} = Dimensions.get('window');
const Feed = (props) => {
  useEffect(() => {
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
        <View style= {{flexDirection : 'row', alignItems: 'center', padding : 10, }}>
          <Image
            source={source}
            style={{marginRight: 10, height: 30, width: 30, borderRadius: 50}}
          />
          <View >
            <Text>{item.name}</Text>
            <Text>{item.location}</Text>
          </View>
          {/* <TouchableOpacity style={{}}>
              <Text>...</Text>
          </TouchableOpacity> */}
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
