import React, { useContext } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { ThemeContext } from "../contexts/ThemeContext"

const body = document.getElementsByTagName("body")[0];


const Layout = ({ children }) => {

  const themeContext = useContext(ThemeContext);

  const { isLightTheme, lightTheme, darkTheme } = themeContext

  body.style.backgroundColor = isLightTheme ? lightTheme.bodyBackground : darkTheme.bodyBackground;

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>

  )
}

export default Layout