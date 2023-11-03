import React from 'react'
import Navbar from '../layout/Navbar'

const About = () => {
  return (
    <div className='container'>
       <Navbar></Navbar>
      <h1>About</h1>
      <p className='lead'>
      Monitoring includes the measuring and evaluation of employee performance, also called performance management.

Interaction covers the day-to-day exchanges between managers and reports, as well as among peers, to communicate job expectations, company culture, feedback, and more.

The reward aspect of employee management includes praise, recognition, monetary prizes, and other incentives that managers may offer employees as a result of high performance.

Finally, discipline describes the measures that managers may take to improve low performance, correct mistakes, and enforce company policies. These measures could be as simple as one-on-one meetings, or they could be as serious as termination or legal action.

Effective employee management often hinges on individual managers and their ability to motivate, communicate, and build trust with their reports. The best managers act as coaches for their employees, recognizing the great work they’re doing now while challenging them to improve.
      </p>
    </div>
  )
}

export default About
