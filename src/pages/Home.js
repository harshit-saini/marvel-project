import React from 'react';
import Characters from '../components/Characters';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



const Home = () => {
  console.log("home")
  return (
    <>
      <Navbar />
      <HeroSection />
      <Characters />
      <Footer />
    </>
  );
};

export default Home;
