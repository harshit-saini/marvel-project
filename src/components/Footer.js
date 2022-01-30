import React from 'react';

const Footer = () => {
  return (
    <div className="bg-danger d-flex justify-content-center flex-column align-items-center text-white mt-5" style={{ minHeight: "200px" }}>
      <div className="text-center mt-5">
        <div>© 2022 MARVEL</div>
        <div>Data provided by Marvel. © 2022 MARVEL</div>
        {/* <a href=\"http://marvel.com\">Data provided by Marvel. © 2022 MARVEL</a> */}
      </div>
      <div className="bg-dark text-center w-100 p-2 mt-auto">
        <h6>Made by Harshit saini using Marvel API</h6>
      </div>
    </div>
  )
};

export default Footer;
