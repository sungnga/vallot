import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import voterInfoReducer from './voterInfoReducer';

export default combineReducers({
  voterResult: voterInfoReducer,
  form: formReducer
});
