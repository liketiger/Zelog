import React from 'react';
import classes from './rotating-image.module.css';

const RotatingImage = ({ src, alt }) => {
  return <img className={classes.pic} src={src} alt={alt} />;
};

export default RotatingImage;
