import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import HeroSection from "../components/HeroSection.jsx";
import TestimonialSlider from "../components/TestimonialSlider";
import StatsSection from '../components/StatsSection.jsx'
const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <StatsSection/>
      <HeroSection/>
      <TopDoctors />
      <div className=" flex items-center justify-center bg-white">
      <TestimonialSlider />
    </div>
          <Banner />
    </div>
  )
}

export default Home