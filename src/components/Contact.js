import React from 'react';
import { Link } from 'react-router-dom';

const Contact = props => {

  return (
    <div className="pure-u-1-3">
      <Link to={`/contacts/${props.id}`}>
        <h2>{props.name}</h2>
      </Link>
      <p>{props.email}</p>
    </div>
  )
}

export default Contact;