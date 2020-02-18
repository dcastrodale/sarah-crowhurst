import React from 'react';
import './spash.scss';

export default ({ children, theme="default" }) => {
  return (
    <div className={`splash theme--${theme}`}>
      {children}
    </div>
  );
}