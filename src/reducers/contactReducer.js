import { CONTACT_ACTIONS } from '../util/constants';

const initialState = {
  submitted: false,
}

function contactReducer(state = initialState, action) {
  switch (action.type) {
    case CONTACT_ACTIONS.CONTACT:
      return Object.assign({}, state, {
        submitted: true
      });
    case CONTACT_ACTIONS.RESET:
      return Object.assign({}, state, {
        submitted: false
      });
    default:
      return state
  }
}

export default contactReducer;
