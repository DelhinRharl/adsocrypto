import React from 'react'

const Signin = () => {
  return (
    <div>

        <h1>Sign In</h1>

        <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />

            <button type="submit">Sign In</button>
            
    </div>
    </div>
  )
}

export default Signin