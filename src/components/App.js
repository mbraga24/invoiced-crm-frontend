import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Collection from './Collection';
import Show from './Show';
import styles from './App.module.sass';

const App = () => {

  useEffect(() => {
    // setContacts(data)

  }, [])

  const contacts = useSelector(state => state.contacts)

  const addContact = newContactInfo => {
    console.log("New Contact Info:", newContactInfo)
    const newId = contacts[contacts.length - 1].id + 1
    console.log(newId)
    // setContacts([...contacts, { id: newId, name: newContactInfo.name , email: newContactInfo.email } ])
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
