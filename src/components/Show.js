import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Show = ({ match }) => {
  const contacts = useSelector(state => state.contact.contacts)
  const [ contact, setContact ] = useState({})

  useEffect(() => {
    const contact = contacts.find(({ id }) => id === parseInt(match.params.contactId))
    setContact(contact)
  }, [])
  
  return( 
    <>
      <h1>{contact.first_name} {contact.last_name}</h1>
      <h2>{contact.email}</h2>
    </>
  )
}

export default Show;