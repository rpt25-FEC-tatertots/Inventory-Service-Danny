import React from 'react';
import fetchData from '../utils/fetchData';
import SizingContainer from './sizingContainer';
import InfoContainer from './infoContainer';
import ThumbnailContainer from './thumbnailContainer';
import ButtonContainer from './buttonContainer';
import Shipping from './shipping';
import FitGuide from './fitGuide';

class InventoryApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        colors: [{
          colorName: 'Sorry we couldn\'t find what you are looking for',
          colorAbbreviation: '404',
          thumbnail: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.lQb88AzJ0ybvX9_AITaucAHaHa%26pid%3DApi&f=1',
          inventory: [],
        }],
        price: 404,
        productID: 404,
        title: { title: 'Product Not Found' },
      },
      activeColor: {
        colorName: 'Sorry we couldn\'t find what you are looking for',
        colorAbbreviation: '404',
        thumbnail: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.lQb88AzJ0ybvX9_AITaucAHaHa%26pid%3DApi&f=1',
        inventory: [],
      },
      activeSize: 'XS',
    };
    this.onSizeClick = this.onSizeClick.bind(this);
    this.onThumbClick = this.onThumbClick.bind(this);
    fetchData(`/product${window.location.pathname}`,
      `/images/thumbnailImages${window.location.pathname}`,
      `/title${window.location.pathname}`)
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
          size={activeSize}
          item={item}
          color={activeColor}
        />
        <Shipping />
      </>
    );
  }
}

export default InventoryApp;
