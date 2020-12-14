import { combineReducers } from 'redux';
import postsReducer from './posts/posts';

export default combineReducers({
  posts: postsReducer,
});
