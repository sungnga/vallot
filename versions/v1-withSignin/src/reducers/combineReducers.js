import voterInfoReducer from './voterInfoReducer'
import { combineReducers } from "redux";


const rootReducer = combineReducers({
  voterInformation: voterInfoReducer
})

export default rootReducer