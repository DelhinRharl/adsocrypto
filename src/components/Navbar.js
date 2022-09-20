import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="nav">
            <div className="logo">
                <h3>adsocrypto</h3>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">transactions</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">markets</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">currencies</a>
                </li>
                
              <li>
                  <button> 
                  <li className="nav-item">
                    <a className="nav-link" href="#">Sing up</a>
                    </li>
                </button>
                </li>
              <li>
                  <button> 
                  <li className="nav-item">
                    <a className="nav-link" href="#">Sing in</a>
                    </li>
                </button>
                </li>
            </ul> 
      </nav>
    </div>
  )
}

export default Navbar