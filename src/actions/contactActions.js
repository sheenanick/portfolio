import { CONTACT_ACTIONS } from '../util/constants';
import * as firebase from 'firebase';

export function submitContact(contact) {
  firebase.database().ref('messages').push(contact);
  return {
    type: CONTACT_ACTIONS.CONTACT
  }
}

export function resetContact() {
  return {
    type: CONTACT_ACTIONS.RESET
  }
}
