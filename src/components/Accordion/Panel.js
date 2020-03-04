import React from 'react';
import './panel.scss';

export default ({ children, theme }) => (
  <div className={`panel panel--theme-${theme}`}>
    {children}
  </div>
);