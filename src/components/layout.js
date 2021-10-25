import React from 'react'
import styled from 'styled-components'

import './layout.css'
import MarketingStuff from './marketingStuff'

const Container = styled.div`

`

const Layout = ({ title, description, path, children }) => {
  return <Container>
    <MarketingStuff
      title={title}
      description={description}
      path={path}
    />
    {children}
  </Container>
}

export default Layout