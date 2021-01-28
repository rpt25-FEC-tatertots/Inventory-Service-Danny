import React from 'react';
import styled from 'styled-components';

const Button = styled.button`

`;
const ButtonWrapper = styled.div`
width: 100%
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const ButtonContainer = (props) => (
  <ButtonWrapper>
    <Button />
    <Button />
  </ButtonWrapper>
);

export default ButtonContainer;
