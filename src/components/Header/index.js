import React from 'react';

import Menu from './Menu';
import './header.scss';

export default ({ withTitle=true }) => {
  return (
    <div className="header">
      {
        withTitle &&
          <p className="header__title">
            Sarah Crowhurst
            <span className="header__subtitle">Strategic Digital Consultancy</span>
          </p>
      }
      <Menu />
    </div>
  );
}