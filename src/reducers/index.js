import { combineReducers } from 'redux';
import voterInfoReducer from './voterInfoReducer';
import selectedVideoReducer from './selectedVideoReducer';

export default combineReducers({
  voterResult: voterInfoReducer,
  selectedVideo: selectedVideoReducer
});
