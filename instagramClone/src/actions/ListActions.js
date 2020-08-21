import {LOCAL_STORY, SET_STORY, POST_STORY, SET_LIST} from './types';

import AsyncStorage from '@react-native-community/async-storage';

export const getStory = () => {
    return async (dispatch) => {
        let data = await AsyncStorage.getItem(LOCAL_STORY);
        console.log('localdeki story', data);
        dispatch({type: SET_STORY, payload: JSON.parse(data)});
      };
};

export const postStory = (payload) => {
    return (dispatch) => {
        dispatch({type: POST_STORY, payload});
      };
};

export const getList= () => {
    return  async (dispatch) => {
        let data = await AsyncStorage.getItem(LOCAL_STORY);
        console.log('localdeki list', data);
        dispatch({type: SET_LIST, payload:  JSON.parse(data)});
      };
};
