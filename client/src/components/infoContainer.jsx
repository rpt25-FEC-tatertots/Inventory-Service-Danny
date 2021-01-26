import React from 'react';
import styled from 'styled-components';

const InfoContainer = ({ item, color }) => {
  const { price, productID } = item;
  const { colorName, colorAbbreviation } = color;
  const Container = styled.div`
  width: 100%;
  height: 66px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `;
  const Name = styled.span`
font-size: 25px;
font-weight: bold;
margin: 10px;
`;
  const Price = styled.span`
font-size: 15px;
margin: 10px;
`;
  const Abbreviation = styled.span`
font-size: 17px;
font-weight: bold;
font-variant: small-caps;
margin: 5px;
`;
  return (
    <Container>
      <div>
        <Name>{colorName}</Name>
        <Price>
          $
          {price}
        </Price>
      </div>
      <div>
        <Abbreviation>
          {colorAbbreviation}
        </Abbreviation>
        <Abbreviation>
          | Style No.
          {productID}
        </Abbreviation>
      </div>
    </Container>
  );
};

export default InfoContainer;
