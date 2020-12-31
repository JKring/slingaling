import React from 'react'
import styled from 'styled-components'

import './layout.css'

const Container = styled.main`
  margin: 0;
  height: 100vh;
  background-color: #FFEEDB;
`

const Layout = ({ children }) => {
  return <Container>{children}</Container>
}

export default Layout