import * as React from 'react'

import Layout from '../components/layout'
import Rules from '../components/rules'

const RulesPage = () => {
  return (
    <Layout
      title={'Slingaling Rules'}
      path={'/rules'}
      canonicalUrl={'https://www.slingaling.com/'}
    >
      <Rules />
    </Layout>
  )
}

export default RulesPage
