import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
display: flex;
flex-direction: row;
flex-shrink: 0;
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding: 0 4rem;
max-width: 90rem;
@media (max-width: 575px) {
  padding-right: 40px;
  justify-content: flex-start;
  flex-wrap: no-wrap;
  padding-left: 20px;
}
`;
const ImageWrapper = styled.div`
position: relative;
background: blue;
flex-basis: 12.5%;
padding: .4rem;
@media (max-width: 575px) {
  flex-basis: 33.3333%;
}
`;
const Image = styled.img`
position: absolute;
width: 100%;
border-radius: 10px;
opacity: ${(props) => props.outOfStock ? .3 : 1};
@media (min-width: 972px) {
  width: 75%
})
`;
const SvgContainer = styled.div`
position: absolute;
height: 100%;
width: 100%;
opacity: ${(props) => props.hidden ? 0 : 1}
z-index: 1;
background-repeat: no-repeat;
background-position: 50%;
background-image: url('https://www.patagonia.com/on/demandware.static/Sites-patagonia-us-Site/-/en_US/v1611802123941/images/vectors/check-pdp-swatch.svg')
`;
const thumbnailContainer = ({ onThumbClick, item, activeSize, activeColor }) => {
  const thumbnails = item.colors.map((color) => {
    const outOfStock = color.inventory.filter((sizeObj) => (
      sizeObj.size === activeSize && sizeObj.quantity === 0
    ));
    return (
      <ImageWrapper key={color.thumbnail}>
        <Image
          src={color.thumbnail}
          alt="thumbnail"
          onClick={(e) => onThumbClick(e)}
          outOfStock={outOfStock[0] ? true : false}
        />
        <SvgContainer hidden={activeColor === color ? false : true} />
      </ImageWrapper>
    );
  });

  return (
    <ImageContainer>
      {thumbnails}
    </ImageContainer>
  );
};

export default thumbnailContainer;
