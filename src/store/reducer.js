import { SET_CONTACTS, ADD_CONTACT } from '../store/type';

const defaultContacts = {
  contacts: [],
  contactInfo: {}
}

const reducer = (state = defaultContacts, action) => {
  console.log("REDUCER: ", action)
  console.log("REDUCER: ", state.contacts)
  switch(action.type) {
    case SET_CONTACTS: 
      return {
        ...state,
        contacts: action.payload
      }
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      }
    default:
      return state
  }
}

export default reducer