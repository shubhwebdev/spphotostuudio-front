import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

const LazyImage = ({ src, className }) => {
  return (
    <div className={`w-full h-full ${className || ''}`}>
      <LazyLoadImage
        className="w-full h-full object-cover object-center"
        alt=""
        effect="blur"
        src={src}
      />
    </div>
  );
};

export default LazyImage;
