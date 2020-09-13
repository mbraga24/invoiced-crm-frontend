import React from 'react';
// import useFormFields from '../../hooks/useFormFields';
import userInputState from '../../hooks/userInputState';
import styles from './New.module.sass';

const New = props => {
  
  const [ email, updateEmail, resetEmail ] = userInputState("")
  const [ password, updatePassword, resetPassword ] = userInputState("")

  const handleSubmit = event => {
    event.preventDefault()
    console.log(email)
    console.log(password)
    resetEmail()
    resetPassword()
  }

  return (
    <div className={styles.signInForm}>      
      <form className='pure-form pure-form-stacked' onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" name="email" placeholder="email" className="pure-input-1" value={email} onChange={updateEmail} />
        <label>Password</label>
        <input type="password" name="password" placeholder="email" className="pure-input-1" value={password} onChange={updatePassword} />
        <button className={`pure-button pure-input-1 ${styles.signInButton}`}>
          Sign In
        </button>
      </form>
    </div>
  )
}

export default New;