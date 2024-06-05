/* eslint-disable react/prop-types */
// import React from 'react'

const Btn = (props) => {
  return (
    <div className="bg-custom-light-green w-[100px] text-white text-sm py-2 px-6 rounded  md:ml-6 hover:bg-custom-orange duration-500 ">
      {props.children}
    </div>
  );
};

export default Btn;
