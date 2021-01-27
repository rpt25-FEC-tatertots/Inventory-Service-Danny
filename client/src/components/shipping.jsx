import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const Shipping = () => (
  <Wrapper>
    <span>Shipping and Exchanges</span>
    <span>Check All Local Availability</span>
  </Wrapper>
);
export default Shipping;
