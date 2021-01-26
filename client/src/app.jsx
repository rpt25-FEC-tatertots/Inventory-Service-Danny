import React from 'react';
import reactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

const axios = require('axios');

const GlobalStyle = createGlobalStyle`
body{
  font-family: 'Nunito', sans-serif;
}`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <h2>Inventory Service</h2>
      </>
    );
  }
}
reactDOM.render(<App />, document.getElementById('app'));
