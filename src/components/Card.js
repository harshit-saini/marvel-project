import React from 'react';

const Card = ({ image, name, handleCardClick }) => {
  return (
    <div className="mycard h-100 pb-5 border-rounded border-rounded--bottom shadow-lg" style={{ position: "relative" }}>

      <img src={image} className="card-img-top border-rounded" alt={name} height="300px" style={{ objectFit: "cover" }} onClick={() => handleCardClick(image)} />

      <div className="card-body w-100 text-white border-rounded--bottom" style={{ position: "absolute", bottom: 0, left: 0, backgroundColor: "#c4313d" }}>

        <h5 className="card-title w-100">{name}</h5>
        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>

    </div>
  )
};

export default Card;
