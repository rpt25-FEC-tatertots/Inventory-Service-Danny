/* eslint-disable no-undef */
import { shallow, mount } from 'enzyme';
import { toJSON } from 'enzyme-to-json';
import React from 'react';
import InventoryApp from './components/inventoryApp';
import InfoContainer from './components/infoContainer';
import ButtonContainer from './components/buttonContainer';
import SizingContainer from './components/sizingContainer';
import Shipping from './components/shipping';
import ThumbnailContainer from './components/thumbnailContainer';

jest.mock('./utils/fetchData', () => ({
  __esmodule: true,
  default: async () => ({
    productID: 1,
    price: 100,
    colors: [{
      colorName: 'Black',
      colorAbbreviation: 'BLK',
      discount: null,
      hexCode: '#000000',
      inventory: [{
        size: 'XS',
        quantity: 0,
      }],
    }],
  }),
}));

describe('Inventory App component', () => {
  // it('should render', () => {
  //   const wrapper = shallow(<InventoryApp />);
  //   expect(wrapper.exists()).toBe(true);
  // });
  // it('should render infoContainer', () => {
  //   const wrapper = shallow(<InventoryApp />);
  //   const infoCont = wrapper.find(InfoContainer);
  //   expect(infoCont.length).toBe(1);
  // });
  // it('should render buttonContainer', () => {
  //   const wrapper = shallow(<InventoryApp />);
  //   const butCont = wrapper.find(ButtonContainer);
  //   expect(butCont.length).toBe(1);
  // });
  // it('should render ThumbnailContainer', () => {
  //   const wrapper = shallow(<InventoryApp />);
  //   const thumbCont = wrapper.find(ThumbnailContainer);
  //   expect(thumbCont.length).toBe(1);
  // });
  // it('should render SizingContainer', () => {
  //   const wrapper = shallow(<InventoryApp />);
  //   const sizeCont = wrapper.find(SizingContainer);
  //   expect(sizeCont.length).toBe(1);
  // });
  // it('should render Shipping', () => {
  //   const wrapper = shallow(<InventoryApp />);
  //   const shipCont = wrapper.find(Shipping);
  //   expect(shipCont.length).toBe(1);
  // });
});
// describe('InfoContainer Component', () => {
//   it('should render ', () => {
//     const props = {
//       color: { colorName: 'Forest Red', colorAbbreviation: 'FORD' },
//       item: { price: 30, productID: 1 },
//     };
//     const wrapper = mount(<InfoContainer props={props} />);
//     expect(toJSON(wrapper)).toMatchSnapshot();
//   });
// });
