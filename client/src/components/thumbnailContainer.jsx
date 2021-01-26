import React from 'react';

const thumbnail = require('./thumbnail.jsx');

const thumbnailContainer = (props) => {
  const thumbnails = props.thumbnails.map((thumbnail) => (
    <thumbnail src={props.thumbnail.src}/>
  )

  return (
    <div>{thumbnails}</div>
  );
};

export default thumbnailContainer;