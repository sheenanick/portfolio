import { combineReducers } from 'redux';
import navReducer from './navReducer';

const appReducer = combineReducers({
  navState: navReducer,
});

export default appReducer;
