import React from 'react';

import Layout from '../components/Layout';
import Editorial from '../components/Editorial';
import GoBack from '../components/CTAs/GoBack';

export default () => {
  return (
    <Layout withHeader="true">
      <Editorial layout="fullscreen">
        <h1>Paid Social Media Strategy &amp; Implementation</h1>
        <p>Paid social can be a tricky nut to crack, but I can help with setting social media campaign strategies that identify your digital community and the right messages to reach them. I bring a mix of data driven analysis and creative thinking to all of my clients strategies.</p>
        <p>My social paid media expertise means I have a wealth of knowledge across multiple charities causes and recruitment tactics - whether it be lead generation, recruiting new donors or promoting events.</p>
        <br />
        <GoBack />
      </Editorial>
    </Layout>
  );
}