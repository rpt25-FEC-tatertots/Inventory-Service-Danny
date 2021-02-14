import React from 'react';

const ModalBase = window.styled.div`
font-family: Nunito Sans;
margin: 0px 50px;
background: white;
padding: 1em;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 5px;
color: black;
width: 100%;
`;
const Checkout = window.styled.div`
font-family: Nunito Sans;
background: black;
border-radius: 20px;
color: white;
padding: 20px;
`;
const StyledImg = window.styled.img`
max-height: 200px;
`;
const BuyModal = ({
  close, item, color, size, bagCount,
}) => (
  <ModalBase>
    <h3
      style={{ 'align-self': 'flex-end', cursor: 'pointer' }}
      onClick={close}
    >
      &times;
    </h3>
    <h2>Added to Bag</h2>
    <StyledImg src={color.thumbnail} alt="thumbnail" />
    <h4>{item.title.title}</h4>
    <p>{`Color: ${color.colorName}(${color.colorAbbreviation})`}</p>
    <p>{`Size: ${size} | $${color.discount ? (color.discount * item.price).toFixed(2) : item.price}`}</p>
    <Checkout onClick={close}>
      Checkout(
      {bagCount}
      )
    </Checkout>
  </ModalBase>
);

export default BuyModal;
