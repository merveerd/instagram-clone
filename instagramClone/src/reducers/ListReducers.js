import {SET_STORY, POST_STORY, LOCAL_STORY} from '../actions/types';

const INITIAL_STATE = {
  list: [ { 
      image: require('../assets/feed_1.jpg'),
      name: 'Sarah Wilson',
      location: 'Winterland'
  },
  { 
    image: require('../assets/feed_2.jpeg'),
    name: 'Sarah Wilson',
    location: 'Winterland'
},
{ 
    image: require('../assets/feed_3.jpeg'),
    name: 'Sarah Wilson',
    location: 'Winterland'
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

    let updatedStories =[...state.stories, action.payload];
    AsyncStorage.setItem(LOCAL_STORY, JSON.stringify(updatedStories));

      return {
        ...state,
        stories: updatedStories, //check the data comes from local storage
      };

    default:
      return state;
  }
};
