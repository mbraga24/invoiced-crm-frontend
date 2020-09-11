const defaultContacts = {
  contacts: []
}

const reducer = (state = defaultContacts, action) => {
  switch(action.type) {
    case "SET_CONTACTS": 
      return {
        ...state,
        contacts: action.payload
      }
    default:
      return state
  }
}

export default reducer