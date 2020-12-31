import React from 'react'
import styled from 'styled-components'

import './layout.css'
import SeoStuff from './seoStuff'

const Container = styled.main`
  margin: 0;
  height: 100vh;
  background-color: #FFEEDB;
`

const Layout = ({ title, description, path, children }) => {
  return <Container>
    { !!title && <SeoStuff
      title={title}
      description={description}
      path={path}
    />}
    {children}
  </Container>
}

export default Layout