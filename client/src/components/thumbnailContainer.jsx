import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
`;
const Image = styled.img`
height: 100px;
width: 100px;
margin: 3px;
border-radius: 10px;
opacity: ${(props) => props.outOfStock ? .4 : 1};
`;
const thumbnailContainer = ({ onThumbClick, item, activeSize }) => {
  const thumbnails = item.colors.map((color) => {
    const outOfStock = color.inventory.filter((sizeObj) => (
      sizeObj.size === activeSize && sizeObj.quantity === 0
    ));
    return (
      <Image
        key={color.thumbnail}
        src={color.thumbnail}
        alt="thumbnail"
        onClick={(e) => onThumbClick(e)}
        outOfStock={outOfStock[0] ? true : false}
      />
    );
  });

  return (
    <ImageContainer>
      {thumbnails}
    </ImageContainer>
  );
};

export default thumbnailContainer;
