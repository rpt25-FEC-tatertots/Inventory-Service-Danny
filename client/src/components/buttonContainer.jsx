import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import BuyModal from './buyModal';

const Button = window.styled.div`
font-family: Nunito Sans;
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
const BuyButton = window.styled.div`
font-family: Nunito Sans;
padding: 1rem;
font-weight: 500;
cursor: pointer;
border-radius: 30px;
background-color: ${({ buy }) => (buy === 'Out of Stock' ? 'black' : '#fa4616')};
color: white;
transition: transform .4s ease, background-color .4s ease;
:hover {
  transform: scale(1.05);
}
`;
const ButtonWrapper = window.styled.div`
font-family: Nunito Sans;
width: 300px;
margin: .5rem;
text-align: center;
`;
const WrapperWrapper = window.styled.div`
font-family: Nunito Sans;
margin-top: 1rem;
display: flex;
flex-direction: column;
align-items: center;
`;

const ButtonContainer = ({
  buy, size, item, color,
}) => {
  const [open, setOpen] = useState(false);
  const [bagCount, setBagCount] = useState(0);
  const close = () => setOpen(false);
  return (
    <WrapperWrapper>
      <ButtonWrapper>
        <BuyButton
          id="buy"
          onClick={buy === 'Add to Bag' ? () => {
            setBagCount(bagCount + 1);
            setOpen((o) => !o);
          } : null}
          buy={buy}
        >
          {buy}
        </BuyButton>
        <Popup open={open} closeOnDocumentClick onClose={close}>
          <BuyModal
            item={item}
            size={size}
            color={color}
            close={close}
            bagCount={bagCount}
          />
        </Popup>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button>Browse Used Fleece</Button>
      </ButtonWrapper>
    </WrapperWrapper>
  );
};

export default ButtonContainer;
