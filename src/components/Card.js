import React from 'react';

const imageStyle = {
  objectFit: "cover",
  height: "300px"
}

const cardTitleStyle = {
  position: "absolute",
  bottom: "0px",
  left: "0px",
  background: "linear-gradient(90deg, rgb(196, 24, 1), rgba(226, 26, 0, 0.7) )",
  color: "white",
  width: "auto",
  overflow: "hidden"
}

const Card = ({ image, name, handleCardClick }) => {


  return (
    <div className="mycard shadow-lg h-100 border border-rounded" style={{ position: "relative" }} >
      <img className="card-img-top" src={image} alt={name} style={imageStyle} onClick={() => handleCardClick(image)} />
      <div className="card-title" style={cardTitleStyle}>
        <h5 className=" p-2" >{name}</h5>
      </div>
    </div>
  )

  /*
    return (
      <div className="mycard h-100 pb-5 border-rounded border-rounded--bottom shadow-lg" style={{ position: "relative" }}>
  
        <img src={image} className="card-img-top border-rounded" alt={name} height="300px" style={{ objectFit: "cover" }} onClick={() => handleCardClick(image)} />
  
        <div className="card-body w-100 text-white border-rounded--bottom" style={{ position: "absolute", bottom: 0, left: 0, backgroundColor: "#c4313d" }}>
  
          <h5 className="card-title w-100">{name}</h5>
  
        </div>
  
      </div>
    )
  */
};

export default Card;
