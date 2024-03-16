import React from 'react';

const Video = ({ title, url }) => {
  return (
    <div>
      <h2>{title}</h2>
      <iframe width="560" height="315" src={url} title={title} frameborder="0" allowfullscreen></iframe>
    </div>
  );
};

export default Video;
