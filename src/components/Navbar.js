import React, { useRef } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

  const navigationRef = useRef();

  const handleMenuBtn = () => {
    console.log("menu btn clicked")
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bold bg-danger bg-gradient" style={{ minHeight: "70px" }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">MARVEL</Link>
        <button onClick={handleMenuBtn} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navContents" aria-controls="navContents" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navContents" >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/comics">Comics</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Disabled</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
