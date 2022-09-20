import React from 'react'

const Signup = () => {
  return (
    <div>
        <h1>Sign Up</h1>
        <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" />

            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />

            <label htmlFor="password-confirm">Confirm Password</label>
            <input type="password" name="password-confirm" id="password-confirm" />

            <button type="submit">Sign Up</button>
            
        </div>
    </div>
  )
}

export default Signup