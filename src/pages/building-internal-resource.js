import React from 'react';

import Layout from '../components/Layout';
import Editorial from '../components/Editorial';
import GoBack from '../components/CTAs/GoBack';

export default () => {
  return (
    <Layout withHeader="true">
      <Editorial layout="fullscreen">
        <h1>Building Internal Resource</h1>
        <p>I offer bespoke training in order to assist your teams to refine their digital skills. All training materials are tailored to your needs, providing hands experience and take away tools for troubleshooting and best practise. From re-energising your email program to building internal resources to make the most of social media.</p>
        <br />
        <GoBack />
      </Editorial>
    </Layout>
  );
}