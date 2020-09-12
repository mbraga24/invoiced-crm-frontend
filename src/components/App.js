import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SET_CONTACTS, ADD_CONTACT } from '../store/type';
import { getContacts, postContact } from '../api';
import Collection from './Collection';
import Show from './Show';
import styles from './App.module.sass';

const App = () => {

  const dispatch = useDispatch()
  const contacts = useSelector(state => state.contact.contacts)

  useEffect(() => {
    getContacts()
    .then(contacts => dispatch({ type: SET_CONTACTS, payload: contacts }))
  }, [dispatch])

  const addContact = newContact => {
    // create contact with the correct 
    // const newContact = { 
    //   first_name: newContactInfo.firstName, 
    //   last_name: newContactInfo.lastName, 
    //   email: newContactInfo.email 
    // }
    postContact(newContact)
    .then(newContact => dispatch({ type: ADD_CONTACT, payload: newContact }))

    dispatch({ type: ADD_CONTACT, payload: { id: newId, first_name: newContactInfo.firstName, last_name: newContactInfo.lastName, email: newContactInfo.email } })
  }
  
  // console.log("APP COMP:", contacts)
  return (
    <div id="App" className={styles.main}>
      <Switch>
        <Route exact path="/contacts" render={() => <Collection addContact={addContact} />} />
        <Route path="/contacts/:contactId" component={Show} />
        <Redirect from="/" to="/contacts" />
      </Switch>
    </div>
  );
}

export default App;
