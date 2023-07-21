import React from "react";
import {BsFillPersonFill, BsStarFill} from 'react-icons/bs'
import {BiDollar} from 'react-icons/bi'
const Popular = ({ image, title, category, rating, participants, price }) => {
  return (
    <div className=" hover:scale-x-50 duration-300 rounded-lg shadow-lg p-3 bg-white">
      <img src={image} alt="" className=" mb-3 " />
      <h3 className=" text-base text-teal-600 mb-2">{category}</h3>
      <h3 className=" text-base mb-3">{title}</h3>
      <div className=" flex justify-between items-center">
        <div className=" flex items-center">
          <BsFillPersonFill />
          <p>{participants}</p>
        </div>
        <div className=" flex items-center">
          <BsStarFill className=" text-orange-500" />
          <p>{rating}</p>
        </div>
        <div className=" flex items-center">
          <BiDollar />
          <p className=" text-teal-700 font-bold">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Popular;
