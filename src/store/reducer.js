const defaultContacts = {
  contacts: [
    { id: 1, name: 'Andrew', email: 'andrew@example.com' },
    { id: 2, name: 'Mark', email: 'mark@example.com' },
    { id: 3, name: 'Sarah', email: 'sarah@example.com' }
  ]
}

const reducer = (state = defaultContacts, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default reducer