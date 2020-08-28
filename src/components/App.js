import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import data from './data';
import Collection from './Collection';
import Show from './Show';
import styles from './App.module.sass';

const App = () => {

  const [ contacts, setContacts ] = useState([])

  useEffect(() => {
    setContacts(data)
  }, [data])

  const addContact = newContactInfo => {
    const newId = contacts[contacts.length - 1].id + 1
    setContacts([...this.state.contacts, { id: newId, name: newContactInfo.name , email: newContactInfo.email } ])
  }

  return (
    <div id="App" className={styles.main}>
      <Switch>
        <Route exact path="/contacts" render={() => <Collection addContact={addContact} contacts={contacts}/>} />
        <Route path="/contacts/:contactId" component={Show} />
        <Redirect from="/" to="/contacts" />
      </Switch>
    </div>
  );
}

export default App;
