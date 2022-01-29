import React from 'react';
import banner from "./comics-gd62ec284d_1920.jpg";


const HeroSection = () => {
  return (
    <div className='p-2 p-md-3 p-lg-5'>
      <div style={{ position: "relative", height: "400px" }}>
        <img className='border-rounded border border-5 border-danger' src={banner} alt="marvel-banner" style={{ height: "100%", width: "100%", objectFit: "cover" }} />

        <div className="bg-dark w-100 border-rounded--bottom text-white d-flex justify-content-center align-items-center" style={{ height: "40px", position: "absolute", bottom: "0", left: "0" }}> Characters | Comics | Creators | Stories</div>
      </div>
    </div>
  )
};

export default HeroSection;
