import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { LOCAL_AUTH_ID, USER } from './actions/types';
import AsyncStorage from '@react-native-community/async-storage';

import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Feed from './screens/Feed';
import AddImage from './screens/AddImage';

import { navigationRef } from './RootNavigation';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Add Image" component={AddImage} />
    </Tab.Navigator>
  );
}


function Router(props) {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={({navigation, route}) => ({
            title: '',
          })}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={({navigation, route}) => ({
            title: 'Sign Up',
          })}
        />
        <Stack.Screen
          name="Feed"
          component={Home}
          options={({navigation, route}) => ({
            title: 'Feed',
            headerLeft: null,
            headerRight: () => (
              <TouchableOpacity
                  onPress={() => {
                      AsyncStorage.removeItem(LOCAL_AUTH_ID);
                      USER.token = null;
                      navigation.replace('SignIn');
                  }}
                  style={{
                      marginRight: 20
                  }}
              >
                  <Image source={require('./assets/logout.png')} style={{ width: 20, height: 20, margin: 10 }} />
              </TouchableOpacity>
          ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default Router;
