import React, { useEffect, useState, useRef } from 'react';
import Card from './Card';
import useAxios from '../hooks/useAxios';
import Pagination from './Pagination';
import Loading from './Loading';
import Modal from './Modal';

const htmltag = document.getElementsByTagName("html")[0];



const DisplayInfo = ({ entity }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(52);   // page limit is currently fixed
  const [pageOffset, setPageOffset] = useState(0);

  const [isModalOpen, setIsModelOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const ref = useRef();
  const cardsRef = useRef();

  const toExpandBar = () => {

    const options = {
      root: null, // viewport
      threshold: 1,
      rootMargin: "0px"
    }

    const callbackFunction = (entries, observer) => {
      entries.forEach(entry => {
        console.log(entry.boundingClientRect.top)
        if (entry.boundingClientRect.top <= 0) {
          entry.target.children[0].classList.add("bar")
          cardsRef.current.classList.add("padding120")
        }
        if (entry.boundingClientRect.top > 0) {
          entry.target.children[0].classList.remove("bar")
          cardsRef.current.classList.remove("padding120")

        }
      })
    }

    const observer = new IntersectionObserver(callbackFunction, options)

    observer.observe(ref.current);
  }

  useEffect(() => {
    toExpandBar();
  }, [])


  useEffect(() => {
    let newPageOffset = (currentPage - 1) * pageLimit;
    setPageOffset(newPageOffset);
    console.log("characters", currentPage)
  }, [currentPage, pageLimit])

  const { data, error, isLoading, total } = useAxios(`/${entity}`, pageLimit, pageOffset);

  const toggleModal = (image) => {
    setIsModelOpen(state => !state);
    setModalImage(image);
    console.log(htmltag)
    htmltag.style.overflowX = "hidden";
    htmltag.style.height = "100vh";
    console.log(isModalOpen, image)
  }

  const renderPagination = () => (
    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pageLimit={pageLimit} total={total} />
  );

  const renderCards = (displayValue) => {

    if (isLoading === true) return <Loading />

    return (
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 ">
        {data.map((item) => (
          <div className="col p-3 mb-3">
            <Card key={item.id} name={item[displayValue]} image={item.thumbnail.path + "." + item.thumbnail.extension} handleCardClick={toggleModal} />
          </div>
        ))}

      </div>
    )

  };

  let displayValue = ""
  if (entity === "characters") displayValue = "name";
  else if (entity === "comics") displayValue = "title"
  else if (entity === "creators") displayValue = "fullName"

  if (error) return <div>{error}</div>

  return (
    <>
      <div ref={ref} className="container-fluid container-md">
        <div className="bg-light border-rounded p-2 p-md-3  d-flex flex-column flex-md-row justify-content-between">
          <div>
            <h3 className='text-capitalize'>Marvel {entity} </h3>
            <span className="small m-0 p-0 text-end">(Showing {pageLimit} of {total} )</span>
          </div>
          <div className="align-self-center align-self-md-end mt-3 mt-md-0">
            {renderPagination()}
          </div>
        </div>
      </div>
      <div ref={cardsRef} className="container" style={{ minHeight: "100vh" }}>

        {renderCards(displayValue)}

      </div>

      {isModalOpen && <Modal setIsModelOpen={setIsModelOpen} modalImage={modalImage} />}
    </>
  )
};

export default DisplayInfo;
