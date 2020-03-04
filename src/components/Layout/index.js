import React from 'react';

import './layout.scss';
import Head from '../Head';
import Header from '../Header';

export default ({ children, withHeader }) => (
  <div className="layout__root">
    {
      withHeader && <Header />
    }
    <Head />
    {children}
  </div>
)