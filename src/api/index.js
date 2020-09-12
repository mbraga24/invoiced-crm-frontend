export const getContacts = () => {
  return fetch("http://localhost:3000/v1/contacts")
  .then(r => r.json())
}

export const postContact = (contact) => {
  return fetch(`http://localhost:3000/v1/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contact)
  })
}