import React, { useEffect, useState } from 'react';
import Card from './Card';
import useAxios from '../hooks/useAxios';
import Pagination from '../components/Pagination';
import Loading from '../components/Loading';
import Modal from '../components/Modal';

const htmltag = document.getElementsByName("html");



const Characters = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(52);   // page limit is currently fixed
  const [pageOffset, setPageOffset] = useState(0);

  const [isModalOpen, setIsModelOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);


  useEffect(() => {
    let newPageOffset = (currentPage - 1) * pageLimit;
    setPageOffset(newPageOffset);
    console.log("characters", currentPage)
  }, [currentPage, pageLimit])

  const { data, error, isLoading, total } = useAxios("/characters", pageLimit, pageOffset);

  const toggleModal = (image) => {
    setIsModelOpen(state => !state);
    setModalImage(image);
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
          <div className="col p-3">
            <Card key={item.id} name={item.name} image={item.thumbnail.path + "." + item.thumbnail.extension} handleCardClick={toggleModal} />
          </div>
        ))}

      </div>
    )

  };


  if (error) return <div>{error}</div>

  return (
    <>
      <div className="container sticky-top">
        <div className="bg-light border-rounded p-2 p-md-4  d-flex flex-column flex-md-row justify-content-between">
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
