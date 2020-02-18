import React from "react"

import Layout from '../components/Layout';
import Splash from '../components/Splash';
import Lockup from '../components/Lockup';
import Editorial from '../components/Editorial';
import SEO from "../components/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <Splash>
      <Lockup />
    </Splash>

    <Editorial
      theme="white"
    >
      <p>I help charities and social good brands maximise their digital potential through audience focussed consultancy, and campaign delivery to hit your goals and generate meaningful insights.</p>
      <p>As an independent consultant, I can offer impartial advice at reasonable rates, with the flex to suit your campaign schedules.</p>
    </Editorial>

  </Layout>
)

export default IndexPage
