import React from 'react';

const ModalBase = window.styled.div`
background: black;
color: white;
width: 100%;
`;
const FitModal = (props) => (
  <ModalBase>
    <h2>{`${props.gender}'s ${props.sizeCategory} Sizing Information`}</h2>
  </ModalBase>
);

export default FitModal;