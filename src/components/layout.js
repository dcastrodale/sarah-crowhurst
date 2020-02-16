import React from 'react';

import './layout.scss';
import Head from './head';

export default ({ children }) => (
  <div className="layout__root">
    <Head />
    {children}
  </div>
)