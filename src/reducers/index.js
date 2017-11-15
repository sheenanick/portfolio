import { combineReducers } from 'redux';
import navReducer from './navReducer';
import contactReducer from './contactReducer';

const appReducer = combineReducers({
  navState: navReducer,
  contactState: contactReducer,
});

export default appReducer;
