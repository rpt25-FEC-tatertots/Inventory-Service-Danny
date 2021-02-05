import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const ImageContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: no-wrap;
justify-content: center;
align-items: center;
width: 100%;
`;
const ImageWrap = styled.div`
position: relative;
width: 100px;
height: 100px;
margin: 1px;
`;
const Image = styled.img`
position: absolute;
height: 100px;
width: 100px;
border-radius: 10px;
opacity: ${(props) => props.outOfStock ? .3 : 1};
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
      <Link to={`${color.colorName}`} key={color.thumbnail}>
        <ImageWrap>
          <Image
            src={color.thumbnail}
            alt="thumbnail"
            onClick={(e) => onThumbClick(e)}
            outOfStock={outOfStock[0] ? true : false}
          />
          <SvgContainer hidden={activeColor === color ? false : true} />
        </ImageWrap>
      </Link>
    );
  });

  return (
    <Router>
      <ImageContainer>
        {thumbnails}
      </ImageContainer>
    </Router>
  );
};

export default thumbnailContainer;
