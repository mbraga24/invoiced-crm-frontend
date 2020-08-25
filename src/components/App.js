import React, { Component } from 'react';
import Contact from './Contact';
import AddContactForm from './AddContactForm';
import data from './data';
import './App.css';


class App extends Component {
  state = {
    contacts: data
  }

  renderContacts = () => {
    return this.state.contacts.map(info => (
      <Contact key={info.id} { ...info } />
    ))
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
      <div id="App" className="pure-container">
        <AddContactForm addContact={this.addContact}/>
        <div className="pure-g">
          {this.renderContacts()}
        </div>
      </div>
    );
  }
}

export default App;
