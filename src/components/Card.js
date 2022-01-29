import React from 'react';

const Card = ({ image, name }) => {
  return (
    <div className="mycard h-100 p-1 pb-5 bg-light border-rounded border-rounded--bottom shadow" style={{ position: "relative" }}>
      <img src={image} className="card-img-top" alt={name} height="300px" style={{ objectFit: "contain" }} />
      <div className="card-body w-100 bg-danger text-white border-rounded--bottom" style={{ position: "absolute", bottom: 0, left: 0 }}>
        <h5 className="card-title w-100">{name}</h5>
        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  )
};

export default Card;
