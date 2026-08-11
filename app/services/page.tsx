import React from 'react'
import HeroOne from '@/components/services/HeroOne'
import Details from '@/components/services/Details'
import WhyChooseUs from '@/components/services/WhyChooseUs'
import Statics from '@/components/services/Statics'

export const metadata = {
  title: 'Our Services & Packages | Dream Sky Airways',
  description:
    'Explore express bus services, flight bookings, cab rentals, tour & honeymoon packages, and motorbike expeditions with Dream Sky Airways.',
}

export default function ServicesPage() {
  return (
    <main className="bg-white text-black w-full overflow-x-hidden space-y-0">
      <HeroOne />
      <Details />
      <Statics />
      <WhyChooseUs />
    </main>
  )
}