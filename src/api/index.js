export const getContacts = () => {
  return fetch("http://localhost:3000/v1/contacts")
  .then(r => r.json())
}