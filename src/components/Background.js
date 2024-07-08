import React from 'react';
import backgroundImage from './Recurso1.jpg';


const Background = () => {
    return (
        <div className="background" style={{ backgroundImage: `url(${backgroundImage})` }}>
      </div>
    );
  };

export default Background;