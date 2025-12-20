import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';

const Home = () => {
  return (
    <div className='min-h-screen w-full bg-blue-100 flex flex-col' >
        <Header/>
        <Hero/>
        <Features/>
        <HowItWorks/>
    </div>
  )
}

export default Home