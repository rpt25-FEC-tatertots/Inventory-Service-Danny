import React from 'react';
import reactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import SizingContainer from './components/sizingContainer.jsx';
import InfoContainer from './components/infoContainer.jsx';
import ThumbnailContainer from './components/thumbnailContainer.jsx';
import MockData from '../../Test/MockData';

const GlobalStyle = createGlobalStyle`
body{
  font-family: 'Nunito', sans-serif;
}`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: MockData[0],
      activeColor: 0,
      activeSize: undefined,
    };
    this.onSizeClick = this.onSizeClick.bind(this);
    this.onThumbClick = this.onThumbClick.bind(this);
  }

  onSizeClick(e) {
    this.setState({ activeSize: e.target.innerHTML });
  }

  onThumbClick(e) {
    const index = this.state.item.thumbnails.indexOf(e.target.src);
    this.setState({ activeColor: index });
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const selectedColor = this.state.item.colors[this.state.activeColor];
    const { item, activeSize } = this.state;
    return (
      <>
        <GlobalStyle />
        <h2>Inventory Service</h2>
        <InfoContainer color={selectedColor} item={item} />
        <ThumbnailContainer
          thumbnails={item.thumbnails}
          onThumbClick={this.onThumbClick}
          item={item}
        />
        <SizingContainer
          inventory={selectedColor.inventory}
          onSizeClick={this.onSizeClick}
          activeSize={activeSize}
        />
      </>
    );
  }
}
reactDOM.render(<App />, document.getElementById('app'));
