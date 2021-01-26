import React from 'react';
import styled from 'styled-components';

const SizeContainer = styled.div`
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
const SizeWrapper = styled.div`
opacity: ${(props) => props.oos ? .4 : 1};
`;
const SizingContainer = ({ inventory, onSizeClick, activeSize }) => {
  const sizes = inventory.map((size) => (
    <SizeWrapper key={size.size} oos={size.quantity > 0 ? false : true}>
      <Size
        key={size.size}
        onClick={(e) => onSizeClick(e)}
        active={size.size === activeSize ? true : false}
        oos={size.quantity > 0 ? false : true}
      >
        {size.size}
      </Size>
      </SizeWrapper>
  ));
  return (
    <SizeContainer>
      {sizes}
    </SizeContainer>
  );
};

export default SizingContainer;
