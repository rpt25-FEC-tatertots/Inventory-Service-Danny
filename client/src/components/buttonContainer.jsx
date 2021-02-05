import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
padding: .4rem 2rem;
margin: .4;
cursor: pointer;
border-radius: 15px;
background-color: ${({ buy }) => buy === 'Buy' ? 'black' : '#fa4616'};
color: white;
transition: transform .3s ease;
:hover {
  transform: scale(1.05);
}
`;
const ButtonWrapper = styled.div`
width: 100%
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const ButtonContainer = ({ buy }) => (
  <ButtonWrapper>
    <Button id="buy">{buy}</Button>
    <Button>Browse Used Fleece</Button>
  </ButtonWrapper>
);

export default ButtonContainer;
