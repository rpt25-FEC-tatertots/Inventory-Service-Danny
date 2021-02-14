import React from 'react';
import Popup from 'reactjs-popup';
import { HashRouter as Router, Link } from 'react-router-dom';

const SizeContainer = window.styled.div`
font-family: Nunito Sans;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
curser: pointer;
`;
const StyledLink = window.styled(Link)`
font-family: Nunito Sans;
text-decoration: none;
&:focus, &:hover, &:visited, &:link, &:active {
  text-decoration: none;
}
`;
const Size = window.styled.div`
font-family: Nunito Sans;
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
const StyledSpan = window.styled.span`
font-family: Nunito Sans;
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
const StyledA = window.styled.a`
font-family: Nunito Sans;
color: white;
font-weight: bold;
outline: none;
`;
const SizingContainer = ({ color, colorIndex, onSizeClick, activeSize }) => {
  const sizes = color.inventory.map((size) => (
    <Popup
      key={size.size}
      on="hover"
      trigger={(
        <StyledLink to={`?OOS=${!(size.quantity > 0)}&colorIndex=${colorIndex}`}
        key={size._id}
        >
          <Size
            key={size.size}
            onClick={(e) => onSizeClick(e)}
            active={size.size === activeSize}
            oos={!(size.quantity > 0)}
          >
            {size.size}
          </Size>
        </StyledLink>
      )}
    >
      {!(size.quantity > 0) ? (
        <StyledSpan>
          Out of stock
          {' '}
          <StyledA href="">Notify Me</StyledA>
        </StyledSpan>
      ) : null}
    </Popup>
  ));
  return (
    <Router>
      <SizeContainer>
        {sizes}
      </SizeContainer>
    </Router>
  );
};

export default SizingContainer;
