import React from 'react';
import Characters from '../components/Characters';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
;



const Home = () => {
  console.log("home")
  return (
    <>
      <Navbar />
      <HeroSection />
      <Characters />
    </>
  );
};

export default Home;
