import React from 'react';

import './editorial.scss';

export default ({ children, theme="white", layout="default" }) => {
  return (
    <div
      className={`editorial editorial--theme-${theme} editorial--layout-${layout}`}
    >
      {children}
    </div>
  );
}