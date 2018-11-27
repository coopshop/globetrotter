import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // 
  // const theme = createMuiTheme({
  //   typography: {
  //     fontFamily: "'Poppins', sans-serif",
  //     fontSize:14,
  //     textTransform: "none",
  //     color: "#484848",
  //   },
  //   palette: {
  //     primary: {
  //       light: "#ff8e8c",
  //       main: "#484848",
  //       dark: "#c62035",
  //       contrastText: "#fff"
  //     },
  //     secondary: {
  //       light: "#4da9b7",
  //       main: "#ff5a5f",
  //       dark: "#004e5a",
  //       contrastText: "#000"
  //     }
  //   },
  // });

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
