
import React from 'react'

import endzones from '../images/endzones.png'
import fingerOnPuckHole from '../images/finger-on-puck-hole.png'
import slingAngle from '../images/sling-angle.png'
import colorThroughThePuckHole from '../images/color-through-the-puck-hole.png'
import dingalingDot from '../images/dingaling-dot.png'

const Rules = ({ callThemAGameNerd }) => {
  return <div>
    <div className="p-6 bg-purple">
      { callThemAGameNerd && <p className="text-center text-yellow text-md">Wow, you’re still reading. Bit of a game nerd? Okay...</p> }
      <h3 className="text-center text-yellow text-xl lg:text-2xl mt-2">Here are the <b>Rules</b>:</h3>
    </div>
    <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 bg-purple">
      <div className="p-6">
        <p className="text-2xl lg:text-4xl text-yellow md:mt-10">Each player has <b>4 End Zones</b>, protected by <b>4 Dingalings</b>.</p>
        <h3 className="text-4xl lg:text-6xl text-yellow mt-10">You win when <b>all 4</b> of your opponent’s <b>End Zones</b> have <b>no Dingaling</b>.</h3>
      </div>
      <div className="p-6">
        <img className="m-auto" src={endzones} alt="End Zones and Dingalings" />
      </div>
    </div>
    <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 bg-yellow">
      <div className="p-6">
        <p className="text-2xl lg:text-4xl mt-10"><b>Flip the Puck</b> to determine who shoots first.</p>
        <p className="text-2xl lg:text-4xl mt-10">By placing your <b>index finger</b> on the <b>Puck Hole</b> and pulling back, take turns slinging the Puck at each other’s <b>End Zones</b>.</p>
      </div>
      <div className="p-6">
        <img className="m-auto" src={fingerOnPuckHole} alt="Index finger on Puck Hole" />
      </div>
    </div>
    <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 bg-purple">
      <div className="p-6">
        <p className="text-yellow text-2xl lg:text-4xl mt-10">You may change the <b>Sling Angle before</b> each shot you take, but you <b>must leave</b> the Sling as it is <b>after</b> your turn.</p>
      </div>
      <div className="p-6">
        <img className="m-auto" src={slingAngle} alt="Sling Angle" />
      </div>
    </div>
    <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 bg-purple">
      <div className="p-6">
        <p className="text-yellow text-2xl lg:text-4xl mt-10">If any <b>color</b> of the <b>End Zone</b> is <b>visible</b> through the <b>Puck Hole</b>, and that End Zone is <b>protected</b> by a Dingaling, you <b>take</b> that Dingaling.</p>
        <p className="text-yellow text-2xl lg:text-4xl mt-10">When you <b>take a Dingaling</b> from an opponent’s <b>End Zone</b>, you get to <b>shoot again</b>.</p>
      </div>
      <div className="p-6">
        <img className="m-auto" src={colorThroughThePuckHole} alt="Color visible through the puck hole" />
      </div>
    </div>
    <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 bg-yellow">
      <div className="p-6">
        <p className="text-2xl lg:text-4xl mt-10">When you take a Dingaling, you can <b>place it</b> on any <b>Dingaling Dot</b> or any of your <b>unprotected</b> End Zones.</p>
        <p className="text-2xl lg:text-4xl mt-10">When you knock down a Dingaling from a <b>Dingaling Dot</b>, you can move that Dingaling, but it <b>doesn’t grant you another shot</b>.</p>
      </div>
      <div className="p-6">
        <img className="m-auto" src={dingalingDot} alt="Dingaling Dot" />
      </div>
    </div>
  </div>
}

export default Rules