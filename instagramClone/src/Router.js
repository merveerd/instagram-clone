import React from 'react';
import {TouchableOpacity, Image, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Feed from './screens/Feed';
import AddImage from './screens/AddImage';
import AddStory from './screens/AddStory';
import ShowStory from './screens/ShowStory';
import Messages from './screens/Messages';
import Profile from './screens/Profile';
import {navigationRef} from './RootNavigation';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const customTabBarStyle = {
  tabStyle: { marginTop: 10 }, //?
}

function Home() {
  return (
    <Tab.Navigator tabBarOptions={customTabBarStyle}>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name = "AddImage" component = {Feed} options={{
  tabBarButton: () => (<AddImage />)}} />

      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

function Router(props) {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
          name="Messages"
          component={Messages}
          options={({navigation, route}) => ({
            title: 'All Messages',
            headerLeft: ()=> (
              <TouchableOpacity
              onPress={() => {
              
                navigation.replace('Feed');
              }}
              style={{
                marginRight: 20,
              }}>
             <Text style ={{fontSize: 30, marginLeft: 10}}>{'<'} </Text>
            </TouchableOpacity>
            )
          })}
        />

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
          name="AddStory"
          component={AddStory}
          options={({navigation, route}) => ({
            title: 'Add Story',
          })}
        />
                <Stack.Screen
          name="ShowStory"
          component={ShowStory}
          options={({navigation, route}) => ({
           
          })}
        />
        <Stack.Screen
          name="Feed"
          component={Home}
          options={({navigation, route}) => ({
            headerTitle: (   <Image style={{alignSelf: 'center', width:120, height: 40}} source={require('./assets/instagram-text.png')}/>),
            headerLeft: () => (
              <TouchableOpacity
                  onPress={() => {          
                    navigation.replace('AddStory'); //header title does not go off
                  }}
                  style={{
                    marginRight: 20,
                  }}>
                  <Image
                    source={require('./assets/camera.png')}
                    style={{width: 30, height: 30, marginLeft: 10}}
                  />
                </TouchableOpacity>
            ),
            headerRight: () => (
              <View>
                <TouchableOpacity
                  onPress={() => {
                  
                    navigation.replace('Messages');
                  }}
                  style={{
                    marginRight: 20,
                  }}>
                  <Image
                    source={require('./assets/message.png')}
                    style={{width: 20, height: 20}}
                  />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;

