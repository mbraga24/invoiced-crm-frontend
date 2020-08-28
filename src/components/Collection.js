import React, { Component } from 'react';
import Contact from './Contact';
import AddContactForm from './AddContactForm';

const Collection = props => {

  const renderContacts = () => {
    return props.contacts.map(info => (
      <Contact key={info.id} { ...info } />
    ))
  }

  return (
    <div id="Collection" className="pure-container">
      <AddContactForm addContact={props.addContact}/>
      <div className="pure-g">
        {renderContacts()}
      </div>
    </div>
  );
}

export default Collection;
