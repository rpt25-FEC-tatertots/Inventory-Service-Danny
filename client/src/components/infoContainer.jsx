import React from 'react';
import styled from 'styled-components';

const InfoWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100px;
`;
const Name = styled.span`
font-size: 25px;
font-weight: 500;
margin: 10px
`;
const Price = styled.span`
font-size: 15px;
margin: 10px;
`;
const Abbreviation = styled.span`
font-size: 20px;
margin: 10px;
`;
const infoContainer = ({ color, item }) => (
  <InfoWrapper>
    <div>
      <Name>{color.colorName}</Name>
      <Price>
        $
        {item.price}
      </Price>
    </div>
    <Abbreviation>
      {color.colorAbbreviation}
      | Style No.
      {item.productID}
    </Abbreviation>
  </InfoWrapper>
);

export default infoContainer;
