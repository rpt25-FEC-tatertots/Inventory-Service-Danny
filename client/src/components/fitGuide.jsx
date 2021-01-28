import React from 'react';
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import FitModal from './fitModal.jsx';

const StyledDiv = styled.div`
display: flex;
width: 100%;
flex-direction: column;
align-items: center;
font-size: 14px;
font-weight: bold;
`;
const FitGuide = (props) => (
  <StyledDiv>
    <Popup
      trigger={<div>{`${props.fit} Fit | Size and Fit Style Guide`}</div>}
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
