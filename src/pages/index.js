import React from "react";
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Splash from '../components/Splash';
import Header from '../components/Header';
import Lockup from '../components/Lockup';
import Editorial from '../components/Editorial';
import Accordion from '../components/Accordion/Accordion';
import Panel from '../components/Accordion/Panel'
import SEO from "../components/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <Header withTitle={false}/>
    <Splash>
      <Lockup />
    </Splash>

    <Editorial
      theme="leaves"
    >
      <p>I help charities and social good brands maximise their digital potential through audience focussed consultancy, and campaign delivery to hit your goals and generate meaningful insights.</p>
      <p>As an independent consultant, I can offer impartial advice at reasonable rates, with the flex to suit your campaign schedules.</p>
    </Editorial>

    <Accordion theme="white">
      <Panel>
        <h3>Digital Strategy Consultancy</h3>
        <p>Need a digital, email or social strategy? Actionable outcomes rooted in insight</p>
        <br />
        <div className="cta cta--dark">
          <Link to="digital-strategy-consultancy">Read More</Link>
        </div>
      </Panel>

      <Panel>
        <h3>Paid Social Media Strategy and Implementation</h3>
        <p>Setting campaign strategy, creative messaging and audiences.</p>
        <br />
        <div className="cta cta--dark">
          <Link to="paid-social-media-strategy-and-implementation">Read More</Link>
        </div>
      </Panel>

      <Panel>
        <h3>Building internal resource through training</h3>
        <p>Build your teams resource through bespoke digital training</p>
        <br />
        <div className="cta cta--dark">
          <Link to="building-internal-resource">Read More</Link>
        </div>
      </Panel>
    </Accordion>

    <Editorial
      theme="dark"
    >
      <h2>How can I help you?</h2>
      <p>Email me a challenge, or a brief and we can chat about how I can help you with your digital program.</p>
      <div className="cta">
        <a href="mailto:Hello@sarahcrowhurst.co.uk">Hello@sarahcrowhurst.co.uk</a>
      </div>
    </Editorial>

  </Layout>
)

export default IndexPage
