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
      selectedIndex: 0,
      activeSize: undefined,
    };
    this.onSizeClick = this.onSizeClick.bind(this);
  }

  onSizeClick(e) {
    this.setState({ activeSize: e.target.innerHTML });
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const selectedColor = this.state.item.colors[this.state.selectedIndex];
    const { item, activeSize } = this.state;
    console.log(item.thumbnails);
    return (
      <>
        <GlobalStyle />
        <h2>Inventory Service</h2>
        <InfoContainer color={selectedColor} item={item} />
        <ThumbnailContainer thumbnails={item.thumbnails} />
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
