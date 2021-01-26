import React from 'react';
import reactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import InfoContainer from './components/infoContainer.jsx';
import MockData from '../../Test/MockData';

const GlobalStyle = createGlobalStyle`
body{
  font-family: 'Nunito', sans-serif;
}`;

class App extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< frontEnd
    this.state = {};
=======
    this.state = {
      item: MockData[0],
      selectedIndex: 0,
    };
>>>>>>> add infoContainer styled component
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const selectedColor = this.state.item.colors[this.state.selectedIndex];
    const { item } = this.state;
    return (
      <>
        <GlobalStyle />
        <h2>Inventory Service</h2>
        <InfoContainer color={selectedColor} item={item} />
      </>
    );
  }
}
reactDOM.render(<App />, document.getElementById('app'));
