import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Contact.module.sass';

const Contact = props => {

  return (
    <div className={`${styles.contact} pure-u-1-3`}>
      <h2>
        <Link to={`/contacts/${props.id}`}>
          {props.first_name} {props.last_name}
        </Link>
      </h2>
      <p>{props.email}</p>
    </div>
  )
}

export default Contact;