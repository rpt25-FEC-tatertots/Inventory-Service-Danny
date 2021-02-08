import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const StyledA = styled.a`
margin-top: 1rem;
font-size: 14px;
font-weight: bold;
text-decoration: none;
color: black;
:hover {
  text-decoration: underline;
}
`;
const Shipping = () => (
  <Wrapper>
    <StyledA href="">Shipping and Exchanges</StyledA>
    <StyledA href="">Check All Local Availability</StyledA>
  </Wrapper>
);
export default Shipping;
