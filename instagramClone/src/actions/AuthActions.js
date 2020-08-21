import AsyncStorage from '@react-native-community/async-storage';
import {
    Alert
} from 'react-native';

import {
    LOGIN_SUCCESS,
    LOCAL_AUTH_ID,
    USER,
} from './types';

import * as RootNavigation from '../RootNavigation';


export const sign = (params, signType) => {
    return (dispatch) => {
        if ((signType === 'signIn' && params.email != '' && params.password != '') ||
            (signType === 'signUp' && params.email != '' && params.password != '' && params.firstname != '' && params.lastname != '')) {

            if (validateEmail(params.email)) {

                RootNavigation.replace('Feed');
                USER.token = 'xxxx';
                AsyncStorage.setItem(LOCAL_AUTH_ID, USER.token);
                dispatch({
                    type: LOGIN_SUCCESS, payload: params
                });
            } else {
                Alert.alert('WARNING', 'Please enter a valid email adress!');
            };
        } else {
            Alert.alert('WARNING', 'Please fill the form');
        };
    };
};

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}