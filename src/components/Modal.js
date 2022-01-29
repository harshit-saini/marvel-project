import React, { useEffect } from 'react';


const Modal = ({ modalImage, setIsModelOpen }) => {

  useEffect(() => {
    const bodytag = document.getElementsByTagName("body");
    bodytag[0].addEventListener("click", (event) => {

      // ---- current target is the element whose event listner is listening
      // console.log({ currentTarget: event.currentTarget })
      // console.log({ target: event.target })
      if (event.target.id !== "modal") return;
      setIsModelOpen(false)
    })

    // cleanup for the event listner
    return () => {
      bodytag[0].removeEventListener("click", () => { });
    }
  })

  const style = {
    position: "fixed",
    top: "0",
    left: "0",
    height: "100vh",
    width: "100vw",
    zIndex: "5000",
    // display: isModalOpen ? "flex" : "none"
    display: "flex",
    backgroundColor: "rgba(145, 145, 145, 0.8)",
  }

  return (
    <div className="justify-content-center align-items-center" style={style} id="modal">
      <div className="h-75 w-75">
        <img className="border border-danger border-rounded bg-danger" height="100%" width="100%" src={modalImage} alt="" style={{ objectFit: "contain" }} />
      </div>
    </div>
  )
};

export default Modal;
