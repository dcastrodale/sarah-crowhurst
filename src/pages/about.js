import React from 'react';

import Layout from '../components/Layout';
import Editorial from '../components/Editorial';
import GoBack from '../components/CTAs/GoBack';

export default () => {
  return (
    <Layout withHeader="true">
      <Editorial layout="fullscreen">
        <h1>About</h1>
        <p>I'm an experienced senior digital strategist with over 11 years of experience working in the fundraising sector across the UK and global markets.</p>
        <p>I have worked for some of the UK’s most well loved charities including Barnardo’s, Save the Children and Plan International, with a focus on developing digital supporter journeys across and digital content for email and social.</p>
        <p>Most recently I have been helping charities reach their fundraising goals by creating digital strategies to identify engagement and acquisition opportunities. I have worked across all disciplines of individual giving, from developing new products to recruit new donors, diversifying event offerings, to developing audience personas for highly targeted campaigns.</p>
        <p>I have managed successful paid media campaigns and provided consultancy for clients such Terrence Higgins Trust, Orbis International (US), British Red Cross, World Animal Protection (Global) and Crisis. </p>
        <br />
        <GoBack />
      </Editorial>
    </Layout>
  );
}