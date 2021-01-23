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

  componentDidMount() {
    axios.get('/product/1')
      .then((response) => {
        const item = response.data;
        this.setState({ item });
      });
    axios({
      method: 'post',
      url: '/product/1',
      data: {
        productID: 1,
        price: 139,
        colors: [
          {
            colorName: 'El Cap Khaki',
            colorAbbreviation: 'ELKH',
            discount: null,
            hexCode: '#a7d12a',
            inventory: [
              {
                size: 'XXS',
                quantity: 6,
              },
              {
                size: 'XS',
                quantity: 1,
              },
              {
                size: 'S',
                quantity: 4,
              },
              {
                size: 'M',
                quantity: 1,
              },
              {
                size: 'L',
                quantity: 4,
              },
              {
                size: 'XL',
                quantity: 6,
              },
              {
                size: 'XXL',
                quantity: 0,
              },
              {
                size: 'XXS',
                quantity: 9,
              },
            ],
          },
          {
            colorName: 'Black',
            colorAbbreviation: 'BLK',
            discount: null,
            hexCode: '#8074c2',
            inventory: [
              {
                size: 'XXS',
                quantity: 6,
              },
              {
                size: 'XS',
                quantity: 9,
              },
              {
                size: 'S',
                quantity: 7,
              },
              {
                size: 'M',
                quantity: 1,
              },
              {
                size: 'L',
                quantity: 9,
              },
              {
                size: 'XL',
                quantity: 2,
              },
              {
                size: 'XXL',
                quantity: 6,
              },
              {
                size: 'XXS',
                quantity: 0,
              },
            ],
          },
          {
            colorName: 'New Navy',
            colorAbbreviation: 'NENA',
            discount: null,
            hexCode: '#fb6e8c',
            inventory: [
              {
                size: 'XXS',
                quantity: 6,
              },
              {
                size: 'XS',
                quantity: 2,
              },
              {
                size: 'S',
                quantity: 7,
              },
              {
                size: 'M',
                quantity: 1,
              },
              {
                size: 'L',
                quantity: 2,
              },
              {
                size: 'XL',
                quantity: 5,
              },
              {
                size: 'XXL',
                quantity: 6,
              },
              {
                size: 'XXS',
                quantity: 5,
              },
            ],
          },
          {
            colorName: 'Feather Grey',
            colorAbbreviation: 'FEA',
            discount: 0.11,
            hexCode: '#bf4927',
            inventory: [
              {
                size: 'XXS',
                quantity: 7,
              },
              {
                size: 'XS',
                quantity: 4,
              },
              {
                size: 'S',
                quantity: 2,
              },
              {
                size: 'M',
                quantity: 1,
              },
              {
                size: 'L',
                quantity: 7,
              },
              {
                size: 'XL',
                quantity: 7,
              },
              {
                size: 'XXL',
                quantity: 2,
              },
              {
                size: 'XXS',
                quantity: 3,
              },
            ],
          },
          {
            colorName: 'Oak Grove Green',
            colorAbbreviation: 'OAGR',
            discount: null,
            hexCode: '#041a0c',
            inventory: [
              {
                size: 'XXS',
                quantity: 6,
              },
              {
                size: 'XS',
                quantity: 5,
              },
              {
                size: 'S',
                quantity: 4,
              },
              {
                size: 'M',
                quantity: 1,
              },
              {
                size: 'L',
                quantity: 6,
              },
              {
                size: 'XL',
                quantity: 0,
              },
              {
                size: 'XXL',
                quantity: 3,
              },
              {
                size: 'XXS',
                quantity: 7,
              },
            ],
          },
        ],
      },
    });
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
