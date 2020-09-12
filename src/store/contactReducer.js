import { SET_CONTACTS, ADD_CONTACT, REMOVE_CONTACT } from '../store/type';

const defaultState = {
  contacts: [],
}

const reducer = (state = defaultState, action) => {
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
        contacts: [...state.contacts, action.payload.user]
      }
    case REMOVE_CONTACT: 
      const updatedContacts = state.contacts.filter(contact => contact.id !== action.payload)

      return {
        ...state,
        contacts: [...updatedContacts]
      }
    default:
      return state
  }
}

export default reducer