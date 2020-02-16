import React from "react"

import Layout from '../components/Layout';
import Lockup from '../components/Lockup';
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <Lockup />
  </Layout>
)

export default IndexPage
