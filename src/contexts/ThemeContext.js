import React, { Component, createContext } from 'react';

const ThemeContext = createContext();

export default class ThemeContextProvider extends Component {

  state = {
    isLightTheme: true,
    darkTheme: {
      backgroundColor: "#15202B",
      color: "white"
    },
    lightTheme: {
      backgroundColor: "white",
      color: "red"
    }

  }

  changeTheme() {
    console.log(this.state)
  }

  render() {
    this.changeTheme()
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}
