import React from 'react';

const ImageSlider = ({ image, message, description }) => {
  const divStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat', 
    height: '300px', 
    position: 'relative',
    color: '#fff', 
    textAlign: 'center', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    padding: '20px', 
  };

  return (
    <div className='w-full'>
      <div style={divStyle} className='bg-no-repeat bg-center bg-cover w-full font-extrabold relative'>
        <div>
          <p>{message}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
