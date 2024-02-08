import React from 'react'
import Carousel from './components/Carousel'
import Mission from './sections/Mission'
import Objective from './sections/Objective'
import Services from './sections/Services'
import About from './sections/About'
import Contact from './sections/Contact'
import Team from './sections/Team'

const page = () => {
  return (
    <div id='home' className='' data-aos='zoom-out-up' data-aos-duration='2000'>
      <div>
      <Carousel/>
      <Mission/>
      <Objective/>
      <About/>
      <Services/>
      <Contact/>
      <Team/>
      </div>
    </div>
  )
}

export default page