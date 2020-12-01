import React from 'react';

import './style.scss';
const Header = (props) => {
  return (
    <header data-test='headerComponent'>
      <div className='wrap'>
        <div className='logo' data-test='logo'>
          LOGO
        </div>
      </div>
    </header>
  );
};

export default Header;
