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
`;
const thumbnailContainer = ({ thumbnails }) => {
  const thumbnail = thumbnails.map((url) => (
    <Image key={url} src={url} alt="thumbnail" />
  ));

  return (
    <ImageContainer>
      {thumbnail}
    </ImageContainer>
  );
};

export default thumbnailContainer;
