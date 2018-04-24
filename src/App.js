import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import dotenv from 'dotenv';
import Home from "./containers/Home";

dotenv.config();

injectGlobal`
  html {
    font-size: 62.5%; 
  }
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    margin: 0;
    padding: 10px;
    font-family: 'helvetica neue', helvetica, sans-serif;
    font-size: 16px;
    font-size: 1.6rem;
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
