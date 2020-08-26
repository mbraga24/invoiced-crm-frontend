import React, { Component } from 'react';
import Contact from './Contact';
import AddContactForm from './AddContactForm';
import './Layout.css';

class Layout extends Component {

  renderContacts = () => {
    return this.props.contacts.map(info => (
      <Contact key={info.id} { ...info } />
    ))
  }

  render() {
    // console.log(this.props.contacts)
    return (
      <div id="Layout" className="pure-container">
        <AddContactForm addContact={this.addContact}/>
        <div className="pure-g">
          {this.renderContacts()}
        </div>
      </div>
    );
  }
}

export default Layout;
