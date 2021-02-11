import axios from 'axios';
import React from 'react';
import fetchData from '../utils/fetchData';
import { createGlobalStyle } from 'styled-components';
import SizingContainer from './sizingContainer';
import InfoContainer from './infoContainer';
import ThumbnailContainer from './thumbnailContainer';
import ButtonContainer from './buttonContainer';
import Shipping from './shipping';
import FitGuide from './fitGuide';

const GlobalStyle = createGlobalStyle`
body{
  font-family: 'Nunito', sans-serif;
}`;

class InventoryApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: { colors: [{ inventory: [] }] },
      activeColor: { inventory: [] },
      activeSize: undefined,
    };
    this.onSizeClick = this.onSizeClick.bind(this);
    this.onThumbClick = this.onThumbClick.bind(this);
    fetchData(`/product${window.location.pathname}`, `http://localhost:5003/images/thumbnailImages${window.location.pathname}`)
      .then((item) => this.setState({ item, activeColor: item.colors[0] }))
      .catch((err) => console.log(err));
  }

  onSizeClick(e) {
    this.setState({ activeSize: e.target.innerHTML });
  }

  onThumbClick(colorName) {
    const activeColor = this.state.item.colors.filter((color) => color.colorName === colorName);
    this.setState({ activeColor: activeColor[0] });
  }

  render() {
    const { item, activeSize, activeColor } = this.state;
    const outOfStock = activeColor.inventory.filter((size) => (
      size.size === activeSize && size.quantity === 0))[0];
    return (
      <>
        <GlobalStyle />
        <InfoContainer color={activeColor} item={item} />
        <ThumbnailContainer
          item={item}
          onThumbClick={this.onThumbClick}
          activeSize={activeSize}
          activeColor={activeColor}
        />
        <SizingContainer
          colorIndex={item.colors.indexOf(activeColor)}
          color={activeColor}
          onSizeClick={this.onSizeClick}
          activeSize={activeSize}
        />
        <FitGuide fit="Regular" />
        <ButtonContainer
          buy={outOfStock ? 'Out of Stock' : 'Add to Bag'}
        />
        <Shipping />
      </>
    );
  }
}

export default InventoryApp;
