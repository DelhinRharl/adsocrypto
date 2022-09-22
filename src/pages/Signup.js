import React from 'react'

const Signup = () => {
  return (
    <div className="register">
        <h1>Register an account</h1>
        <p>
          Manage, buy and sell crypto, all in your pocket.
        </p>
        <div className="form">
            <label htmlFor="firstName">First Name <span>*</span> </label>
            <input type="text" name="firstName" id="firstName" placeholder="first name" />

            <label htmlFor="lastName">Last Name <span>*</span></label>
            <input type="text" name="lastName" id="lastName" placeholder="Last name"/>

            <label htmlFor="email">Email <span>*</span></label>
            <input type="email" name="email" id="email" placeholder="email"/>

            <label htmlFor="password">Password <span>*</span></label>
            <input type="password" name="password" id="password" placeholder="password" />

            <label htmlFor="password-confirm">Confirm Password<span>*</span></label>
            <input type="password" name="password-confirm" id="password-confirm" placeholder="confirm password"/>

            <button type="submit">Sign Up</button>
            
        </div>
    </div>
  )
}

export default Signup