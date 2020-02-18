import React from 'react';

import './editorial.scss';

export default ({children, theme="white"}) => {
  return (
    <div
      className={`editorial editorial--theme-${theme}`}
    >
      {children}
    </div>
  );
}