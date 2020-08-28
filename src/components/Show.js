import React from 'react';
import data from './data'

const Show = ({ match }) => {
  // console.log("DATA:", match.params.contactId)
  console.log("DATA:", data)
  const contact = data.find(({ id }) => id === parseInt(match.params.contactId))
  
  return( 
    <>
      <h1>{contact.name}</h1>
      <h2>{contact.email}</h2>
    </>
  )
}

export default Show;