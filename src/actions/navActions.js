import { NAV_ACTIONS } from '../util/constants';

export function toggleMenu() {
  return {
    type: NAV_ACTIONS.TOGGLE_MENU,
  }
}
