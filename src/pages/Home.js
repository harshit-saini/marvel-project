// characters are displayed in the home page

import React from 'react';
import DisplayInfo from '../components/DisplayInfo';
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection';



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
