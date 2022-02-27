import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();


export default class ThemeContextProvider extends Component {

  state = {
    isLightTheme: true,
    darkTheme: {
      bodyBackground: "#15202B",
      componentBackground: "#202e3a",
      text: "white"
    },
    lightTheme: {
      bodyBackground: "white",
      componentBackground: "#f8f9fa",
      text: "black"
    }

  }

  changeTheme = () => {
    this.setState(state => ({ isLightTheme: !state.isLightTheme }))
    console.log("changing the theme, current theme : ", this.state.isLightTheme)
  }

  render() {
    return (
      <ThemeContext.Provider value={{
        ...this.state,
        handleThemeChange: this.changeTheme
      }}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}
