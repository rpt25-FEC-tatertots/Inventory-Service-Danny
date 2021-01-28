import React from 'react';
import styled from 'styled-components';

const ModalBase = styled.div`
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