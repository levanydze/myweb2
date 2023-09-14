import React from "react";

function Details({ detailPhoto, key }) {
  console.log(detailPhoto);
  return (
    <div>
      Detailsooo
      <h1>{key} </h1>
      <img src={detailPhoto} alt="" />
    </div>
  );
}

export default Details;
