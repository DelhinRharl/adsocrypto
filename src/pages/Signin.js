import React from 'react'

const Signin = () => {
  return (
    <div className="signin">

        <h1>Sign In</h1>

        <div className="form">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="email" />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="password" />

            <button type="submit">Sign In</button>
            
    </div>
    </div>
  )
}

export default Signin