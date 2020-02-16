import React from "react"

import Layout from '../components/layout';
import Lockup from '../components/lockup';
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <Lockup />
  </Layout>
)

export default IndexPage
