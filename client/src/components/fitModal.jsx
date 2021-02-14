import React from 'react';

const ModalBase = window.styled.div`
font-family: Nunito Sans;
background: black;
font-family: Nunito Sans;
padding: 1em;
display: flex;
flex-direction: column;
border-radius: 5px;
color: white;
width: 100%;
`;
const FitModal = ({ close }) => (
  <ModalBase>
    <h3
      style={{ 'align-self': 'flex-end', cursor: 'pointer' }}
      onClick={close}
    >
      &times;
    </h3>
    <h2>Sizing Information</h2>
    <h3>Sleeve</h3>
    <p>With elbow bent, measure from the center (back) of neck to elbow and down to wrist.</p>
    <h3>Chest/Bust</h3>
    <p>Measure around your chest/bust, just under armpit.</p>
    <h3>Waist</h3>
    <p>Measure around waist at the smallest circumference.</p>
    <h3>Hips</h3>
    <p>Stand, feet together, and measure around the largest circumference at hips.</p>
    <h3>Hands</h3>
    <p>Measure around the fullest part of the hand, not including thumb.</p>
    <h3>Inseam</h3>
    <p>Take a pair of pants that fit well and measure from the crotch to bottom of leg. All pants come with a finished hem.</p>
    <i>Measurements refer to body size, not garment dimensions, and are in inches unless otherwise noted.</i>
  </ModalBase>
);

export default FitModal;
