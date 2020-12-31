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

const Text = styled.p`
  font-family: 'Open Sans', sans-serif;
`

const FormContainer = styled.div`
  border: 5px solid #724E91;
  border-radius: 10px;
  padding: 30px;
  max-width: 400px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const BigInput = styled.input`
  border: 2px solid #E54F6D;
  border-radius: 5px;
  font-size: 16px;
  padding: 15px;
  margin: 20px 0;
  flex: 1;
`

const BigButton = styled.button`
  background-color: #E54F6D;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  flex: 1;
`

const IndexPage = () => {
  return (
    <Layout>
      <Content>
        <Header>Dingalings will be Slingalinging...</Header>
        <Subheader>in early 2021.</Subheader>
        <FormContainer>
          <Text>Join the waiting list (and we'll sling a puck your way).</Text>
          <Form name='contact' method='POST' data-netlify='true' action='/success'>
            <input type='hidden' name='form-name' value='waiting-list' />
            <BigInput type='email' name='email' placeholder='eagerbeaver@gmail.com' />
            <BigButton type='submit'>Join the List</BigButton>
          </Form>
        </FormContainer>
      </Content>
    </Layout>
  )
}

export default IndexPage
