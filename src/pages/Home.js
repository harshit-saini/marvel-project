// characters are displayed in the home page

import React from 'react';
import DisplayInfo from '../components/DisplayInfo';
import HeroSection from '../components/HeroSection';
import Layout from '../components/Layout'



const Home = () => {
  console.log("home")
  return (
    <>
      <Layout >
        <HeroSection />
        <DisplayInfo entity={"characters"} />
      </Layout>
    </>
  );
};

export default Home;
