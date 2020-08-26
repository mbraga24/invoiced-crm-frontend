import React, { Component } from 'react';

class AddContactForm extends Component {

  state = {
    email: "",
    name: ""
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)
    this.props.addContact(this.state)
    this.setState({
      email: "",
      name: ""
    });
  }

  render() {
    return (
      <div className="pure-g">
        <div className="pure-u-12-24">
          <form className="pure-form" onSubmit={this.handleSubmit}>
            <fieldset>
                <legend>New Contact</legend>
                <input name="email" type="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                <input name="name" type="text" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
                <button type="submit" className="pure-button pure-button-primary">Add</button>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default AddContactForm;