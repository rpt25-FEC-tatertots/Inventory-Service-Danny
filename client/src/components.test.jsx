import { shallow } from 'enzyme';
import React from 'react';
import InventoryService from './components/inventoryService';
import InfoContainer from './components/infoContainer';
import ButtonContainer from './components/buttonContainer';
import SizingContainer from './components/sizingContainer';
import Shipping from './components/shipping';
import ThumbnailContainer from './components/thumbnailContainer';

describe('App component', () => {
  it('should render', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('h2').text();
    expect(text).toBe('Inventory Service');
  });
  it('should render infoContainer', () => {
    const wrapper = shallow(<App />);
    const infoCont = wrapper.find(InfoContainer);
    expect(infoCont.length).toBe(1);
  });
  it('should render buttonContainer', () => {
    const wrapper = shallow(<App />);
    const butCont = wrapper.find(ButtonContainer);
    expect(butCont.length).toBe(1);
  });
  it('should render ThumbnailContainer', () => {
    const wrapper = shallow(<App />);
    const thumbCont = wrapper.find(ThumbnailContainer);
    expect(thumbCont.length).toBe(1);
  });it('should render SizingContainer', () => {
    const wrapper = shallow(<App />);
    const sizeCont = wrapper.find(SizingContainer);
    expect(sizeCont.length).toBe(1);
  });
  it('should render Shipping', () => {
    const wrapper = shallow(<App />);
    const shipCont = wrapper.find(Shipping);
    expect(shipCont.length).toBe(1);
  });
});
// describe('InfoContainer Component', () => {
//   it('should render ', () => {
//     const props = {
//       color: { colorName: 'Forest Red', colorAbbreviation: 'FORD' },
//       item: { price: 30, productID: 1 },
//     };
//     const wrapper = shallow(<InfoContainer {...props} />);

//   });
// });
