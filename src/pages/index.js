import * as React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Rules from '../components/rules'

import travisFullFrontal from '../images/hero-background.jpg'
import maxsTiniestDingaling from '../images/maxs-tiniest-dingaling.gif'
import easyToLearn from '../images/easy-to-learn.jpg'
import betterByTheBeach from '../images/better-by-the-beach.jpg'
import backyard from '../images/backyard.jpg'


const Hero = styled.section`
  height: 800px;
  @media only screen and (max-width: 600px) {
    height: 400px;
  }
`

const Logo = styled.h1`
  font-family: 'Rock Salt', cursive;
  color: white;
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
  max-width: 600px;
  margin: 0 auto 30px auto;
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

const VALUE_PROPS = [
  {
    img: easyToLearn,
    headline: 'Easy to Learn',
    explainers: [
      'Your kids will get it in 2 minutes.',
      'Might take you 3.'
    ]
  },
  {
    img: maxsTiniestDingaling,
    headline: 'Delightfully Tactile',
    explainers: [
      'Bells will be ringing.',
      'Pucks will be slinging.'
    ]
  },
  {
    img: betterByTheBeach,
    headline: 'Bring it Anywhere',
    explainers: [
      'The board folds',
      'into a suitcase-ish box.'
    ]
  }
]

const IndexPage = () => {
  return (
    <Layout
      title={'A tabletop, slingshot billiard game for everyone!'}
      path={'/'}
    >
      <Hero css={{ backgroundImage: `url(${travisFullFrontal})` }} className="bg-no-repeat bg-contain md:bg-cover p-5 bg-purple">
        <Logo className="text-3xl md:text-6xl">Slingaling</Logo>
        <h3 style={{color: 'white', maxWidth: 600 }} className="my-64 py-4 mb-10 md:my-20 text-2xl text-center md:text-left md:text-4xl lg:text-5xl">What if <b>shuffleboard</b> and <b>pinball</b> had a baby… who loved <b>slingshots</b>?</h3>
      </Hero>
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 bg-purple py-4">
        { VALUE_PROPS.map(valueProp => {
          return <div className="p-8">
            <div className="mb-10">
              <img className="rounded-full w-64 h-64 m-auto" src={valueProp.img} alt={valueProp.headline} />
            </div>
            <h3 className="text-center text-yellow text-xl font-bold">
              {valueProp.headline}
            </h3>
            {valueProp.explainers.map(explainer => {
              return <p className="text-center text-yellow text-xl">
                {explainer}
              </p>
            })}
          </div>
        })}
      </div>
      <div className="grid gap-8 grid-cols-1 bg-yellow">
        <div className="mt-12">
          <img className="rounded-full w-80 h-80 m-auto" src={backyard} alt="Made in Oakland" />
          <h3 className="text-center text-xl my-10">
            Handmade in a <b>backyard</b> in <b>Oakland</b>,<br />
            backed by a <b>Lifetime Guarantee</b>.
          </h3>
        </div>
      </div>
      <Rules callThemAGameNerd={true} />
      <div className="grid gap-8 grid-cols-1 bg-yellow p-6">
        <Subheader>We're not quite ready for primetime, but if you're convinced...</Subheader>
        <FormContainer>
          <Text>Join the waiting list (and we'll sling a Puck your way).</Text>
          <Form method='post' netlify-honeypot='bot-field' data-netlify='true' name='waiting_list' action='/success/'>
            <input type='hidden' name='bot-field' />
            <input type='hidden' name='form-name' value='waiting_list' />
            <BigInput type='email' name='email' placeholder='eagerbeaver@gmail.com' />
            <BigButton type='submit'>Join the List</BigButton>
          </Form>
        </FormContainer>
      </div>
    </Layout>
  )
}

export default IndexPage
