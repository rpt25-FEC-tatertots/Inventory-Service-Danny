import React from 'react';
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import FitModal from './fitModal';

const StyledDiv = styled.div`
margin-top: 1rem;
display: flex;
width: 100%;
flex-direction: column;
align-items: center;
font-size: 14px;
font-weight: bold;
cursor: pointer;
`;
const FitGuide = ({ fit }) => (
  <StyledDiv>
    <Popup
      trigger={<div id="guide">{`${fit} Fit | Size & Fit Guide`}</div>}
      modal
      nested
    >
      {(close) => (
        <FitModal />
      )}
    </Popup>
  </StyledDiv>
);

export default FitGuide;
