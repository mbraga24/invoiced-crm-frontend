import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import data from './data';
import Collection from './Collection';
import Show from './Show';
// import './App.css';

class App extends Component {

  state = {
    contacts: data
  }

  addContact = newContactInfo => {
    const contacts = this.state.contacts
    const newId = contacts[contacts.length - 1].id + 1
    this.setState({
      contacts: [...this.state.contacts, { id: newId, name: newContactInfo.name , email: newContactInfo.email } ]
    })
  }

  render() {
    return (
      <div id="App">
        <Switch>
          <Route exact path="/contacts" render={() => <Collection addContact={this.addContact} contacts={this.state.contacts}/>} />
          <Route path="/contacts/:contactId" component={Show} />
          <Redirect from="/" to="/contacts" />
        </Switch>
      </div>
    );
  }
}

export default App;
