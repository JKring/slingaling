import * as React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'

const Content = styled.section`
  margin: 0 auto;
  padding: 60px 20px;
  max-width: 800px;
`

const Header = styled.h1`
  font-family: 'Rock Salt', cursive;
  text-align: center;
`

const Subheader = styled.h3`
  font-family: 'Rock Salt', cursive;
  text-align: center;
`

const SuccessPage = () => {
  return (
    <Layout title={'Thanks for joining!'}>
      <Content>
        <Header>Thanks!</Header>
        <Subheader>We'll be in touch soon.</Subheader>
      </Content>
    </Layout>
  )
}

export default SuccessPage
