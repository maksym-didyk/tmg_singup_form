import React from 'react';
import imgLogo from '../images/header-fixed.png';

export const Header = () => {
  return (
    <>
      <div className="singupform__logo">
        <img src={imgLogo} alt="BestRest Logo" />
      </div>
      <div className="singupform__header-text">
        <span className="singupform__accent-color">Sign Up</span>
        {' '}
        and find the best place to rest while traveling
      </div>
    </>
  );
};
