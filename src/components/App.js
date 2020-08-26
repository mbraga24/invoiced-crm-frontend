import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import data from './data';
import Layout from './Layout';
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
          <Route exact path="/" render={() => <Layout contacts={this.state.contacts}/>} />
        </Switch>
      </div>
    );
  }
}

export default App;
