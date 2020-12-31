import * as React from 'react'

const IndexPage = () => {
  return (
    <main>
      <h1>Dingalings will be Slingalinging in early 2021.</h1>
      <h3>Join the waiting list</h3>
      <p>(and we'll sling a puck your way)</p>
      <form name='contact' method='POST' data-netlify='true'>
        <p>
          <label>Email <input type='email' name='email' placeholder='eagerbeaver@gmail.com' /></label>
        </p>
        <p>
          <button type='submit'>Join the List</button>
        </p>
      </form>
    </main>
  )
}

export default IndexPage
