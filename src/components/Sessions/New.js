import React from 'react';
import useFormFields from '../../hooks/useFormFields';
import styles from './New.module.sass';

const New = props => {

  
  const [ fields, handleFieldChange ] = useFormFields({
    email: "",
    password: ""
  })

  
  const handleSubmit = event => {
    event.preventDefault()
    console.log(fields)
  }

  return (
    <div className={styles.signInForm}>      
      <form className='pure-form pure-form-stacked' onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" name="email" placeholder="email" className="pure-input-1" onChange={handleFieldChange} />
        <label>Password</label>
        <input type="password" name="password" placeholder="email" className="pure-input-1" onChange={handleFieldChange}/>
        <button className={`pure-button pure-input-1 ${styles.signInButton}`}>
          Sign In
        </button>
      </form>
    </div>
  )
}

export default New;