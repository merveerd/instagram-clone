import {
  SET_STORY,
  POST_STORY,
  LOCAL_STORY,
  UPDATE_LIST,
  SET_LIST,
  LOCAL_LIST,
} from '../actions/types';
import AsyncStorage from '@react-native-community/async-storage';
import list from '../data';

let story = list.map((item) => ({
  name: item.name,
  storyImage: item.story && item.image,
  _id: item._id,
}))

console.log(story);
const INITIAL_STATE = {
  list,
  stories:  story,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_STORY:
      return {
        ...state,
        stories: action.payload ? [...state.stories, action.payload] : state.stories, //why it doesnt work with &&, I dont belive defining as state.list is necessary as it shouldn't be go null from anywhere
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
        list: action.payload ? [...state.list, action.payload] : state.list, //why it doesnt work with &&, I dont belive defining as state.list is necessary as it shouldn't be go null from anywhere
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
