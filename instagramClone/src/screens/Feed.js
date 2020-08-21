import React, { useEffect } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { getList, getStory } from '../actions'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignIn from './SignIn';

const Tab = createBottomTabNavigator();

const Feed = (props) => {

    useEffect(() => {
        props.getList();
        props.getStory();
    }, []);

    return (
    <View style = {{flex : 1}}>
            {/* <Tab.Navigator>
      <Tab.Screen name="Feed" component={SignUp} />
      <Tab.Screen name="SignIn" component={SignIn} />
    </Tab.Navigator> */}
    </View>
    
    )
};

const mapStateToProps = ({ listResponse }) => {
    const { list, stories } = listResponse;
    return { list, stories };
};

export default connect(mapStateToProps, { getList, getStory })(Feed);
