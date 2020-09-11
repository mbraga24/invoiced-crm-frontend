import React, { Component } from 'react';
import './AddContactForm.sass';

class AddContactForm extends Component {

  state = {
    email: "",
    firstName: "",
    lastName: ""
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)
    this.props.addContact(this.state)
    this.setState({
      email: "",
      firstName: "",
      lastName: ""
    });
  }

  render() {
    console.log(this.state)
    return (
      <div className="pure-g">
        <div className="pure-u-12-24">
          <form className="pure-form" onSubmit={this.handleSubmit}>
            <fieldset>
                <legend>New Contact</legend>
                <input name="email" type="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                <input name="firstName" type="text" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange} />
                <input name="lastName" type="text" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange} />
                <button type="submit" className="pure-button pure-button-primary">Add</button>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default AddContactForm;