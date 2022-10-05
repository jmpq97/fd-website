import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../components/InfoSection/Data'
import {FAQObject} from '../components/FAQSection/Data'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Sidebar from '../components/Sidebar'
import FAQSection from '../components/FAQSection'
import FooterSection from '../components/FooterSection'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
      {/* Main Section */}
      <HeroSection /> 
      {/* About Section */}
      <InfoSection {...homeObjOne} />
      {/* Value Proposition */}
      <Services />
      {/* FAQ */}
      <FAQSection {...FAQObject}/>
      {/* Footer */}
      <FooterSection />
    </>
  )
}

export default Home
