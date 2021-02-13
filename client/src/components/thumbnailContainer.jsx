import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

const ImageContainer = window.styled.div`
display: flex;
flex-direction: row;
flex-wrap: no-wrap;
justify-content: center;
align-items: center;
width: 100%;
`;
const ImageWrap = window.styled.div`
position: relative;
width: 100px;
height: 100px;
margin: 1px;
`;
const Image = window.styled.img`
position: absolute;
height: 100px;
width: 100px;
border-radius: 10px;
opacity: ${(props) => props.outOfStock ? .3 : 1};
`;
const SvgContainer = window.styled.div`
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
  const thumbnails = item.colors.map((color, i) => {
    const outOfStock = color.inventory.filter((sizeObj) => (
      sizeObj.size === activeSize && sizeObj.quantity === 0
    ));
    return (
      <ImageWrap key={color._id}>
        <Link to={`?OOS=${outOfStock[0] ? 'true' : 'false'}&colorIndex=${i}`} key={color._id}>
          <Image
            src={color.thumbnail}
            color={color.colorName}
            alt="thumbnail"
            onClick={(e) => onThumbClick(e.target.attributes.color.value)}
            outOfStock={outOfStock[0] ? true : false}
            key={color._id}
          />
        </Link>
        <SvgContainer hidden={activeColor === color ? false : true} />
      </ImageWrap>
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
