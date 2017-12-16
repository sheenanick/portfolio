import { NAV_ACTIONS } from '../util/constants';

const initialState = {
  showMenu: false,
}

function navReducer(state = initialState, action) {
  switch (action.type) {
    case NAV_ACTIONS.TOGGLE_MENU:
      return { ...state, showMenu: !state.showMenu };
    default:
      return state
  }
}

export default navReducer;
