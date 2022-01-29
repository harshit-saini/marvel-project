import React from 'react';

const Loading = () => {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center mt-5">
      <h4 className="text-center text-light bg-danger p-2 d-inline-block">Loading</h4>
      <div class="lds-ellipsis d-flex justify-content-center" ><div></div><div></div><div></div><div></div></div>
    </div>
  );
};

export default Loading;
