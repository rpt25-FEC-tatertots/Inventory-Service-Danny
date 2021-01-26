import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
`;
const thumbnailContainer = (props) => {

  const thumbnails = props.thumbnails.map((url) => (
    <img src={url} alt="thumbnail"/>
  )

  return (
    <Container>
      {thumbnails}
    </Container>
  );
};

export default thumbnailContainer;