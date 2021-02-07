import React from 'react';
import styled from 'styled-components';
import Popup from 'reactjs-popup';

const SizeContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
curser: pointer;
`;
const Size = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 4px;
height: 46px;
width: 46px;
font-size: 16px;
font-weight: 600;
border-radius: 50%;
border: solid black;
border-width: 4px;
curser: pointer;
transition: transform .3s ease;
:hover {
  transform: scale(1.1);
}
background: ${(props) => (props.active ? 'black' : 'white')};
color: ${(props) => (props.active ? 'white' : 'black')};
opacity: ${(props) => (props.oos ? 0.4 : 1)}
`;
const StyledSpan = styled.span`
position: absolute;
z-index: 2;
font-size: 12px;
top: -125px;
left: -100px;
height: 50px;
width: 200px;
text-align: center;
vertical-align: middle;
line-height: 50px;
color: white;
overflow: visible;
background: black;
border-radius: 10px;
`;
const StyledA = styled.a`
color: white;
font-weight: bold;
outline: none;
`;
const SizingContainer = ({ inventory, onSizeClick, activeSize }) => {
  const sizes = inventory.map((size) => (
    <Popup
      key={size.size}
      on="hover"
      trigger={(
        <Size
          key={size.size}
          onClick={(e) => onSizeClick(e)}
          active={size.size === activeSize}
          oos={!(size.quantity > 0)}
        >
          {size.size}
        </Size>
      )}
    >
      {!(size.quantity > 0) ? (
        <StyledSpan>
          Out of stock
          <StyledA href="">Notify Me</StyledA>
        </StyledSpan>
      ) : null}
    </Popup>
  ));
  return (
    <SizeContainer>
      {sizes}
    </SizeContainer>
  );
};

export default SizingContainer;
