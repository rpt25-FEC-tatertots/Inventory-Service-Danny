import React from 'react';
import { shallow } from 'enzyme';

const App = require('./app.jsx');
const ButtonContainer = require('./components/buttonContainer.jsx');

describe('App component', () => {
  it('should render', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('h2').text();
    expect(text).toBe('Inventory Service');
  });
});
