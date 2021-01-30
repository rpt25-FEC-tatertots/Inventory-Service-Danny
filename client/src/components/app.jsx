import React from 'react';
import { createGlobalStyle } from 'styled-components';
import SizingContainer from './sizingContainer';
import InfoContainer from './infoContainer';
import ThumbnailContainer from './thumbnailContainer';
import MockData from '../../../Test/MockData';
import ButtonContainer from './buttonContainer';
import Shipping from './shipping';
import FitGuide from './fitGuide';

const GlobalStyle = createGlobalStyle`
body{

  font-family: 'Nunito', sans-serif;
}`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: MockData[0],
      activeColor: MockData[0].colors[0],
      activeSize: undefined,
    };
    this.onSizeClick = this.onSizeClick.bind(this);
    this.onThumbClick = this.onThumbClick.bind(this);
  }

  onSizeClick(e) {
    this.setState({ activeSize: e.target.innerHTML });
  }

  onThumbClick(e) {
    const color = this.state.item.colors.filter((color) => color.thumbnail === e.target.src);
    this.setState({ activeColor: color[0] });
  }

  render() {
    const { item, activeSize, activeColor } = this.state;
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
        {/* <SizingContainer
          inventory={activeColor.inventory}
          onSizeClick={this.onSizeClick}
          activeSize={activeSize}
        />
        <FitGuide fit={'Regular'} />
        <ButtonContainer
          buy={activeColor.inventory[activeSize] === 0 ? 'Out of Stock' : 'Buy'}
        />
        <Shipping />
    </>
    );
  }
}

export default App;
