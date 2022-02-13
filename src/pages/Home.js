// characters are displayed in the home page

import React from 'react';
import Characters from '../components/Characters';
import HeroSection from '../components/HeroSection';
import Layout from '../components/Layout'



const Home = () => {
  console.log("home")
  return (
    <>
      <Layout >
        <HeroSection />
        <Characters />
      </Layout>
    </>
  );
};

export default Home;
