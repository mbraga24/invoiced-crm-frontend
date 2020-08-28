import React, { useState, useEffect } from 'react';
import data from './data'

const Show = ({ match }) => {
  const [ contact, setContact ] = useState({})

  useEffect(() => {
    setContact(data.find(({ id }) => id === parseInt(match.params.contactId)))
  }, [data])
  
  return( 
    <>
      <h1>{contact.name}</h1>
      <h2>{contact.email}</h2>
    </>
  )
}

export default Show;