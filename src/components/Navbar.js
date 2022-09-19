import React from 'react'

const Navbar = () => {
  return (
    <div>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Transactions</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">markets</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">currencies</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li> */}
                    </ul>
                    
    </div>
    </div>
  )
}

export default Navbar