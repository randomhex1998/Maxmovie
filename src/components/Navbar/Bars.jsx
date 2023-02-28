import React from "react";

const Bars = ({barsCLK}) => {
  return (
    <>
      <i onClick={barsCLK} className="fa-solid fa-bars" id="bars"></i>
    </>
  );
};

export default Bars;
