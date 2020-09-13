import React from 'react';
import userInputState from '../../hooks/userInputState';
import './AddContactForm.sass';

const AddContactForm = props => {

  const [ email, updateEmail, resetEmail ] = userInputState("")
  const [ firstName, updateFirstName, resetFirstName ] = userInputState("")
  const [ lastName, updateLastName, resetLastName ] = userInputState("")

  const handleSubmit = e => {
    e.preventDefault()
    // create newContact object
    const newContact = { email, firstName, lastName }
    // pass newContact object as argument to addContact function
    props.addContact(newContact)
    // clear input fields
    resetEmail()
    resetFirstName()
    resetLastName()
  }

  return (
    <div className="pure-g">
      <div className="pure-u-12-24">
        <form className="pure-form" onSubmit={handleSubmit}>
          <fieldset>
              <legend>New Contact</legend>
              <input name="email" type="email" placeholder="Email" value={email} onChange={updateEmail} />
              <input name="firstName" type="text" placeholder="First Name" value={firstName} onChange={updateFirstName} />
              <input name="lastName" type="text" placeholder="Last Name" value={lastName} onChange={updateLastName} />
              <button type="submit" className="pure-button pure-button-primary">Add</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default AddContactForm;