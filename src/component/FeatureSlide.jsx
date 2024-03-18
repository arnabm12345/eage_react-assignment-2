// FeatureSlide.js
import React from 'react';

const FeatureSlide = ({ imageSrc, title, description,isActive  }) => {
  return (
    <div className={`carousel-item ${isActive ? 'active' : ''}`}>
      <div className="row d-flex align-items-center">
        <div className="col-lg-6 col-md-6 col-12 mt-2 text-center mt-2 mb-2">
          <img src={imageSrc} alt="app-img" width="48.2%" className="img-fluid rounded h-100" />
        </div>
        <div className="col-lg-6 col-md-6 col-12 mt-2  mt-2 mb-2">
          <div>
            <h2 className="featurehead">{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSlide;
