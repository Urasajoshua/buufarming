import React from 'react'
import Carousel from './components/Carousel'
import Mission from './sections/Mission'
import Objective from './sections/Objective'
import Services from './sections/Services'

const page = () => {
  return (
    <div>
      <Carousel/>
      <Mission/>
      <Objective/>
      <Services/>
    </div>
  )
}

export default page