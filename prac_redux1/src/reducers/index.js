import {combineReducers} from 'redux';
import posts from './addPost';

const postApp = combineReducers({
  posts
})

export default postApp;