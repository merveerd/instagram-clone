import {
  SET_STORY,
  POST_STORY,
  LOCAL_STORY,
  UPDATE_LIST,
  SET_LIST,
  LOCAL_LIST,
} from '../actions/types';
import AsyncStorage from '@react-native-community/async-storage';

const INITIAL_STATE = {
  list: [
    {
      image: require('../assets/feed_1.jpg'),
      name: 'Sarah Wilson',
      location: 'Winterland',
      _id: '1',
    },
    {
      image: require('../assets/feed_1.jpg'),
      name: 'Name 2',
      location: 'Summerland',
      _id: '2',
    },
    {
      image: require('../assets/feed_3.jpeg'),
      name: 'Name 3',
      location: '',
      _id: '3',
    },
    {
      image: require('../assets/feed_3.jpeg'),
      name: 'Sarah Wilson',
      location: 'Winterland',
      _id: '4',
    },
    {
      image: require('../assets/feed_3.jpeg'),
      name: 'Sarah Wilson',
      location: 'Winterland',
      _id: '5',
    },
    {
      image: require('../assets/feed_3.jpeg'),
      name: 'Sarah Wilson',
      location: 'Winterland',
      _id: '6',
    },
  ],
  stories: [],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_STORY:
      return {
        ...state,
        stories: action.payload, //check the data comes from local storage
      };

    case POST_STORY:
      let updatedStories = [...state.stories, action.payload];
      AsyncStorage.setItem(LOCAL_STORY, JSON.stringify(updatedStories));

      return {
        ...state,
        stories: updatedStories, //check the data comes from local storage
      };

    case SET_LIST:
      return {
        ...state,
        list: action.payload && [...state.list, action.payload], //check the data comes from local storage
      };

    case UPDATE_LIST:
      console.log(action.payload);
      let arr = state.list.slice();
      const obj = action.payload;
      arr.push(obj);
      //  let updatedList =[...state.list, action.payload];
      AsyncStorage.setItem(LOCAL_LIST, JSON.stringify(arr));

      return {
        ...state,
        list: arr, //check the data comes from local storage
      };

    default:
      return state;
  }
};
