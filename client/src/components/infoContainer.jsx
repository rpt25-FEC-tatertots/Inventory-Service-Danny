import React from 'react';
import styled from 'styled-components';

const Name = styled.span`
font-size: 20px;
`;
const Price = styled.span`
font-size: 15px;
`;
const Abbreviation = styled.span`
font-size: 20px;
`;
const infoContainer = (props) => (
  <div>
    <Name>{props.item.colorName}</Name>
    <Price>{props.item.price}</Price>
    <Abbreviation>{props.item.abbreviation} |{props.item.productID}</Abbreviation>
  </div>
);

export default infoContainer;
