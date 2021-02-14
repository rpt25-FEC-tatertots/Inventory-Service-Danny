import React from 'react';
import Popup from 'reactjs-popup';
import FitModal from './fitModal';

const StyledDiv = window.styled.div`
font-family: Nunito Sans;
margin-top: 1rem;
display: flex;
width: 100%;
flex-direction: column;
align-items: center;
font-size: 14px;
font-weight: bold;
cursor: pointer;
:hover {
  text-decoration: underline;
}
`;
const FitGuide = ({ fit }) => (
  <StyledDiv>
    <Popup
      trigger={<div id="guide">{`${fit} Fit | Size & Fit Guide`}</div>}
      modal
      nested
    >
      {(close) => (
        <FitModal close={close} />
      )}
    </Popup>
  </StyledDiv>
);

export default FitGuide;
