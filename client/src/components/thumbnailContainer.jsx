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
opacity: ${(props) => props.inStock ? 1 : .4};
`;
const thumbnailContainer = ({ thumbnails, onThumbClick, item }) => {
  const thumbnail = thumbnails.map((url) => (
    <Image
      key={url}
      src={url}
      alt="thumbnail"
      onClick={(e) => onThumbClick(e)}
    />
  ));

  return (
    <ImageContainer>
      {thumbnail}
    </ImageContainer>
  );
};

export default thumbnailContainer;
