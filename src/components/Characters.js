import React, { useEffect, useState, useRef } from 'react';
import Card from './Card';
import useAxios from '../hooks/useAxios';
import Pagination from '../components/Pagination';
import Loading from '../components/Loading';
import Modal from '../components/Modal';

const htmltag = document.getElementsByTagName("html")[0];



const Characters = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(52);   // page limit is currently fixed
  const [pageOffset, setPageOffset] = useState(0);

  const [isModalOpen, setIsModelOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const ref = useRef();

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
        }
        if (entry.boundingClientRect.top > 0) {
          entry.target.children[0].classList.remove("bar")
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

  const { data, error, isLoading, total } = useAxios("/characters", pageLimit, pageOffset);

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

  const renderCards = () => {

    if (isLoading === true) return <Loading />

    return (
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 ">
        {data.map((item) => (
          <div className="col p-3 mb-3">
            <Card key={item.id} name={item.name} image={item.thumbnail.path + "." + item.thumbnail.extension} handleCardClick={toggleModal} />
          </div>
        ))}

      </div>
    )

  };


  if (error) return <div>{error}</div>

  return (
    <>
      <div ref={ref} className="container-fluid container-md">
        <div className="bg-light border-rounded p-2 p-md-3  d-flex flex-column flex-md-row justify-content-between">
          <div>
            <h3>Marvel Characters </h3>
            <span className="small m-0 p-0 text-end">(Showing {pageLimit} of {total} )</span>
          </div>
          <div className="align-self-center align-self-md-end mt-3 mt-md-0">
            {renderPagination()}
          </div>
        </div>
      </div>
      <div className="container" style={{ minHeight: "100vh" }}>

        {renderCards()}

      </div>

      {isModalOpen && <Modal setIsModelOpen={setIsModelOpen} modalImage={modalImage} />}
    </>
  )
};

export default Characters;
