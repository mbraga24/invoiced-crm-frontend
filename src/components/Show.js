import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Show = ({ match }) => {
  const [ contact, setContact ] = useState({})
  const contacts = useSelector(state => state.contacts)

  useEffect(() => {
    setContact(contacts.find(({ id }) => id === parseInt(match.params.contactId)))
  }, [match.params.contactId])
  
  return( 
    <>
      <h1>{contact.name}</h1>
      <h2>{contact.email}</h2>
    </>
  )
}

export default Show;