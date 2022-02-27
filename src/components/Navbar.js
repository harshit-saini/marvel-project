import React, { useContext } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const activeLink = {
  borderBottom: "2px solid white",
  color: "white",
  fontWeight: "bold"
}


const CustomLink = ({ to, children, ...props }) => {

  // const resolvedPath = useResolvedPath(to)  -- i dont know whats its use

  const isMatch = useMatch(to)

  return (
    <Link to={to} {...props} style={isMatch ? activeLink : {}}>
      {children}
    </Link>
  )
}


const Navbar = () => {


  const themeContext = useContext(ThemeContext)




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
        < div className="collapse navbar-collapse" id="navContents" >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <CustomLink className="nav-link" to="/">Home</CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink className="nav-link" to="/comics">Comics</CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink className="nav-link" to="/creators">Creators</CustomLink>
            </li>
          </ul>
          <div>

            <div className="ms-md-2 me-md-1 px-md-2 d-flex justify-content-center align-items-center border-start" >
              <FontAwesomeIcon icon={faSun} />
              <div class="form-check form-switch ms-2 ms-2" >
                <input class="form-check-input" type="checkbox" role="switch" onChange={themeContext.handleThemeChange} />
              </div>
              <FontAwesomeIcon icon={faMoon} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
