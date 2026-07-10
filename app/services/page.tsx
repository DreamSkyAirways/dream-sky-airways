import Flights from '@/components/services/Flights'
import HeroOne from '@/components/services/HeroOne'
import Hotels from  '@/components/services/Hotels'
import Buses from  '@/components/services/Buses'
import Packages from '@/components/services/Packages'


import React from 'react'

const page = () => {
  return (
    <div>
      <HeroOne/>
      <Flights/>
      <Buses/>
      <Hotels/>
      <Packages/>
    </div>
  )
}

export default page