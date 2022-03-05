import React, { useContext } from 'react';
import { Link, useMatch } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'


const CustomLink = ({ to, children, ...props }) => {
  const activeLink = {
    borderBottom: "2px solid white",
    color: "white",
    fontWeight: "bold",
    display: "inline-block"
  }
  // const resolvedPath = useResolvedPath(to)  -- i dont know whats its use

  const isMatch = useMatch(to)

  return (
    <Link to={to} {...props} style={isMatch ? activeLink : {}}>
      {children}
    </Link>
  )
}

const renderThemeSwitch = (handleThemeChange, checked) => (
  <div className="ms-md-2 me-md-1 px-md-2 d-flex justify-content-start justify-content-md-center align-items-center border-md-start" >
    <FontAwesomeIcon style={{ color: "orange" }} icon={faSun} />
    <div class="form-check form-switch ms-2 ms-2" >
      <input class="form-check-input" type="checkbox" role="switch" onChange={handleThemeChange} value="" checked={checked} />
    </div>
    <FontAwesomeIcon style={{ color: "grey" }} icon={faMoon} />
  </div>
)

const renderLinks = () => (
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
)

const renderMenuBtn = () => (
  <button className="navbar-toggler menuBtn" id="menuBtn" type="button" data-bs-toggle="collapse" data-bs-target="#navContents" aria-controls="navContents" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
)



const Navbar = () => {

  // const Nav = styled.nav`

  //   display : flex;
  //   flex-direction : column;

  //   @media(min-width : 768px){
  //     flex-direction: row;
  //   }


  //   .brand {
  //     text-decoration : none;
  //     color : white;
  //     font-weight: bold;

  //   }

  //   .menuBtn{
  //     margin-left : auto;
  //     border : 2px solid white;
  //     padding : 2px 4px;
  //     border-radius : 3px;
  //     color : white;
  //     font-weight: 400;
  //     display: inline-block;
  //     cursor: pointer;
  //     @media(min-width : 768px){
  //       display: none;
  //     }

  //   }

  //   #navContents{
  //     margin-top: 20px;

  //     ul{
  //       display: flex;
  //       flex-direction: column;
  //       padding-left: 0;
  //       margin-bottom: 0;
  //       list-style: none;
  //       @media(min-width : 768px){
  //         flex-direction : row;
  //       }
  //     }

  //     li {
  //       margin-bottom : 10px;
  //       a{
  //         text-decoraion: none;
  //         color : white;

  //       }
  //     }

  //     @media(min-width : 768px){
  //       flex-direction : row;
  //     }


  //   }


  //   /* styled for opened menu */
  //   position: fixed;
  //   top : 0;
  //   left : 0;
  //   height : 100%;
  //   width : 100%;
  //   z-index : 10000;
  //   padding : 20px;










  // `


  const { isLightTheme, handleThemeChange } = useContext(ThemeContext)
  const checked = isLightTheme ? false : true;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bold bg-danger bg-gradient">
      <div class="container-fluid">
        <Link className="navbar-brand" to="/">MARVEL</Link>
        {renderMenuBtn()}
        <div className="collapse navbar-collapse" id="navContents">
          {renderLinks()}
          {renderThemeSwitch(handleThemeChange, checked)}
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
