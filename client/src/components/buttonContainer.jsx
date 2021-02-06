import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
padding: .9rem;
font-weight: 700;
border-style: solid;
border-color: black
border-width: 4px;
cursor: pointer;
border-radius: 30px;
background-color: white;
color: black;
transition: transform .4s ease;
:hover {
  transform: scale(1.05);
}
`;
const BuyButton = styled.div`
padding: 1rem;
font-weight: 500;
cursor: pointer;
border-radius: 30px;
background-color: ${({ buy }) => buy === 'Out of Stock' ? 'black' : '#fa4616'};
color: white;
transition: transform .4s ease;
:hover {
  transform: scale(1.05);
}
`;
const ButtonWrapper = styled.div`
width: 300px;
margin: .5rem;
text-align: center;
`;
const WrapperWrapper = styled.div`
margin-top: 1rem;
display: flex;
flex-direction: column;
align-items: center;
`;
const ButtonContainer = ({ buy }) => (
  <WrapperWrapper>
    <ButtonWrapper>
      <BuyButton id="buy" buy={buy}>{buy}</BuyButton>
    </ButtonWrapper>
    <ButtonWrapper>
      <Button>Browse Used Fleece</Button>
    </ButtonWrapper>
  </WrapperWrapper>
);

export default ButtonContainer;
