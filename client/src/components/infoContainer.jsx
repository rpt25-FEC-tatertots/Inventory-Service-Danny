import React from 'react';
import styled from 'styled-components';

const InfoWrapper = styled.div`
padding: 0rem 4rem .7rem 4rem;
display: flex;
flex-direction: column;
align-items: flex-start;
@media (min-width: 768px) {
  align-items: center;
}
`;
const Div = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
const Name = styled.span`
padding: 0px 4px 0px 0px;
font-size: 14px;
font-weight: 600;
@media (min-width: 768px) {
  font-size: 20px;
}
`;
const Price = styled.div`
font-size: 14px;
font-weight: 600;
`;
const Abbreviation = styled.span`
font-size: 14px;
font-weight: 400;
@media (min-width: 768px) {
  font-weight: 600;
}
`;
const Wrap = styled.div`
display: flex;
width: 100%;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;
const infoContainer = ({ color, item }) => {
  const [dimensions, setDimensions] = React.useState(
    { height: window.innerHeight, width: window.innerWidth },
  );
  React.useEffect(() => {
    const handleResize = () => setDimensions(
      { height: window.innerHeight, width: window.innerWidth },
    );
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
  return (dimensions.width > 767
    ? (
      <InfoWrapper>
        <Div>
          <Name>{color.colorName}</Name>
          <Price>
            {`$${item.price} ${dimensions.width}`}
          </Price>
        </Div>
        <Abbreviation>
          {`${color.colorAbbreviation}  | Style No. ${item.productID}`}
        </Abbreviation>
      </InfoWrapper>
    ) : (
      <InfoWrapper>
        <Name>{color.colorName}</Name>
        <Wrap>
          <Abbreviation>
            {`${color.colorAbbreviation}  |Style No. ${item.productID}`}
          </Abbreviation>
          <Price>
            {`$${item.price} ${dimensions.width}`}
          </Price>
        </Wrap>
      </InfoWrapper>
    ));
};
export default infoContainer;
