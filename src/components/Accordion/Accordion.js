import React from 'react';
import './accordion.scss';

export default ({ theme, children }) => {
  return (
    <div className={`accordion accordion--theme-${theme ? theme : 'white'}`}>
      {
        React.Children.map(children, panel => React.cloneElement(panel, { theme }))
      }
    </div>
  );
}