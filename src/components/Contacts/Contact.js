import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { REMOVE_CONTACT } from '../../store/type';
import { deleteContact } from '../../api';
import styles from './Contact.module.sass';

const Contact = props => {

  const dispatch = useDispatch()

  const removeContact = () => {
    dispatch({ type: REMOVE_CONTACT, payload: props.id})
    deleteContact(props.id)
  }

  return (
    <div className={`${styles.contact} pure-u-1-3`}>
      <h2>
        <Link to={`/contacts/${props.id}`}>
          {props.first_name} {props.last_name}
        </Link>
      </h2>
      <p>{props.email}</p>
      <button
        className={`${styles.removeButton} pure-button`}
        onClick={removeContact}
      >
        Remove
      </button>
    </div>
  )
}

export default Contact;