import React from 'react';

import Layout from '../components/Layout';
import Editorial from '../components/Editorial';
import GoBack from '../components/CTAs/GoBack';

export default () => {
  return (
    <Layout withHeader="true">
      <Editorial layout="fullscreen">
        <h1>Digital Strategy Consultancy</h1>
        <p>Need a digital, email or social strategy?</p><p>Everything I do is rooted insight, so I always conduct a digital audit into you - learning about your objectives, competitors and unique selling points in order to create a bespoke and tailored digital strategy to suit your needs.</p><p>A strategy should be actionable - so you’ll come away with a clear plan on what to do next.</p>
        <br />
        <GoBack />
      </Editorial>
    </Layout>
  );
}