import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SET_CONTACTS, ADD_CONTACT } from '../store/type';
import { getContacts, postContact } from '../api';
import Collection from './Collection';
import Show from './Show';
import styles from './App.module.sass';

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    getContacts()
    .then(contacts => dispatch({ type: SET_CONTACTS, payload: contacts.data }))
  }, [dispatch])

  const addContact = data => {
    // create contact with the correct key/values for the backend
    const newContact = { 
      first_name: data.firstName, 
      last_name: data.lastName, 
      email: data.email 
    }
    postContact(newContact)
    .then(newContact => dispatch({ type: ADD_CONTACT, payload: newContact.data }))
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
