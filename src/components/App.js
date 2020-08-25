import React, { Component } from 'react';
import Contact from './Contact';
import data from './data';

const renderContacts = () => {
  return data.map(info => (
    <Contact key={info.id} { ...info } />
  ))
}

class App extends Component {
  render() {
    return (
      <div className="pure-g">
        {renderContacts()}
      </div>
    );
  }
}

export default App;
