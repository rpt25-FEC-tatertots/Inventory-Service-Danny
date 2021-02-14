import React from 'react';

const Wrapper = window.styled.div`
font-family: Nunito Sans;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const StyledA = window.styled.a`
font-family: Nunito Sans;
margin-top: 1rem;
font-size: 14px;
font-weight: bold;
text-decoration: none;
color: black;

`;
const Shipping = () => (
  <Wrapper>
    <StyledA href="">Shipping and Exchanges</StyledA>
    <StyledA href="">Check All Local Availability</StyledA>
  </Wrapper>
);
export default Shipping;
