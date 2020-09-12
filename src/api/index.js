const ENDPOINT = "http://localhost:3000/v1/contacts"

export const getContacts = () => {
  return fetch(ENDPOINT)
  .then(r => r.json())
}

export const postContact = (contact) => {
  console.log("POST CONTACT:", contact)
  return fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contact)
  })
  .then(r => r.json())
}

export const deleteContact = (contactId) => {
  console.log("DELETE CONTACT:", contactId)
  return fetch(`${ENDPOINT}/${contactId}`, {
    method: 'DELETE'
  })
}