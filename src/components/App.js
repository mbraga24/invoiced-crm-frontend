import React, { Component } from 'react';
import Contact from './Contact';
import data from './data';


class App extends Component {
  state = {
    contacts: data
  }

  renderContacts = () => {
    return this.state.contacts.map(info => (
      <Contact key={info.id} { ...info } />
    ))
  }

  handleClick = e => {
    e.preventDefault()
    const contacts = this.state.contacts
    const newId = contacts[contacts.length - 1].id + 1
    this.setState({
      contacts: [...this.state.contacts, { id: newId, name: `Name-${newId}`, email: `name-${newId}@example.com` } ]
    })
  }
  
  render() {
    return (
      <div id="App">
        <a href="#" className="pure-button" onClick={this.handleClick}>Add Contact</a>
        <div className="pure-g">
          {this.renderContacts()}
        </div>
      </div>
    );
  }
}

export default App;
