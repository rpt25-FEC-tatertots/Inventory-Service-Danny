import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
`;
const Size = styled.span`
display: flex;
align-items: center;
justify-content: center;
margin: 2px;
height: 56px;
width: 56px;
font-size: 16px;
font-weight: 600;
border-radius: 50%;
border: solid black;
border-width: 4px;
background: ${(props)=> props.active ? 'black' : 'white'};
color: ${(props) => props.active ? 'white' : 'black'};
`;
const SizingContainer = ({ inventory, onSizeClick, activeSize }) => {
  const sizes = inventory.map((size) => (
    <Size
    onClick={(e) => onSizeClick(e)}
    active={size.size === activeSize ? true : false}
    >
      {size.size}
    </Size>
  ));
  return (
    <Container>
      {sizes}
    </Container>
  );
};

export default SizingContainer;
