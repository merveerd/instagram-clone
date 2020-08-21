import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, Dimensions, Image} from 'react-native';

import {Input, Button} from '../components';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {sign} from '../actions';

import {LOCAL_AUTH_ID, USER} from '../actions/types';
import AsyncStorage from '@react-native-community/async-storage';

import * as RootNavigation from '../RootNavigation';

const {width, height} = Dimensions.get('window');

const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    AsyncStorage.getItem(LOCAL_AUTH_ID).then((token) => {
      console.log('async ten gelen', token);
      USER.token = token;
      if (token) {
        RootNavigation.replace('Feed');
      }
    });
  }, []);

  return (
    <ScrollView>
      <View
        style={{
          alignItems: 'center',
          paddingTop: 30,
          flex: 1,
        }}>
        <Image
          style={{
            width: width / 2.5,
            height: height / 17,
            marginBottom: height / 10,
          }}
          source={require('../assets/instagram-text.png')}></Image>

        <Input
          placeholder="email"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />

        <Input
          placeholder="password"
          value={password}
          onChangeText={(value) => setPassword(value)}
          secureTextEntry
        />

        <Button
          text={'Log In'}
          style={{height: 40}}
          loading={props.loading}
          onPress={() => {
            const params = {
              email,
              password,
            };
            props.sign(params, 'signIn');
          }}
        />
        <TouchableOpacity
          style={{margin: 10}}
          onPress={() => props.navigation.navigate('SignUp')}>
          <Text style={style.lighterText}>
            Forgot your login details?
            <Text style={style.darkerText}> Get help signing in.</Text>
          </Text>
        </TouchableOpacity>
        <Button
          text={'Login with Facebook'}
          style={{height: 40}}
          loading={props.loading}
          onPress={() => {
            const params = {
              email,
              password,
            };
            props.sign(params, 'signIn');
          }}></Button>
        <View style={{flexDirection: 'row'}}>
          <View style={style.line}></View>
          <Text style={[style.lighterText, {margin: width / 40}]}>OR</Text>
          <View style={style.line}></View>
        </View>

        <TouchableOpacity
          style={{marginTop: 30}}
          onPress={() => props.navigation.navigate('SignUp')}>
          <Text style={style.lighterText}>
            {' '}
            Don't have an account?
            <Text style={style.darkerText}> Sign Up.</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const style = {
  lighterText: {color: 'gray'},
  darkerText: {color: 'black', fontWeight: 'bold'},
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: width * 0.4,
  },
};
const mapStateToProps = ({authResponse}) => {
  const {user} = authResponse;
  return {user};
};

export default connect(mapStateToProps, {sign})(SignIn);
