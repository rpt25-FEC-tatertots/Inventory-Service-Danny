import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

const ImageContainer = window.styled.div`
font-family: Nunito Sans;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
flex-shrink: 0;
@media (max-width: 767px) {
  justify-content: flex-start;
}
`;
const OuterImageContainer = window.styled.div`
width: 100%;
@media (max-width: 767px) {
  margin: 0 40px;
  overflow: scroll;
}
`;
const ImageWrap = window.styled.div`
font-family: Nunito Sans;
position: relative;
width: 100px;
height: 100px;
margin: 8px;
flex-shrink: 0;
`;
const Image = window.styled.img`
font-family: Nunito Sans;
position: absolute;
height: 100px;
width: 100px;
border-radius: 10px;
opacity: ${(props) => (props.outOfStock ? 0.3 : 1)};
transition: transform .3s ease;
:hover {
  transform: scale(1.03);
  box-shadow: 2px 5px 15px #F0F0F0;
}
`;
const SvgContainer = window.styled.div`
font-family: Nunito Sans;
position: absolute;
height: 100%;
width: 100%;
opacity: ${(props) => {
    if (props.hidden) { return 0; }
    if (props.outOfStock) { return 0.3; }
    return 1;
  }};
z-index: 1;
background-repeat: no-repeat;
background-position: 50%;
background-image: url('https://www.patagonia.com/on/demandware.static/Sites-patagonia-us-Site/-/en_US/v1611802123941/images/vectors/check-pdp-swatch.svg')
`;
const thumbnailContainer = ({
  onThumbClick, item, activeSize, activeColor,
}) => {
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
            outOfStock={!!outOfStock[0]}
            key={color._id}
          />
          <SvgContainer hidden={activeColor === color ? false : true} />
        </Link>
      </ImageWrap>
    );
  });

  return (
    <Router>
      <OuterImageContainer>
        <ImageContainer>
          {thumbnails}
        </ImageContainer>
      </OuterImageContainer>
    </Router>
  );
};

export default thumbnailContainer;
