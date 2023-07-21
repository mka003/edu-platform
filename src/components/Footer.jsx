import React from "react";
import {BsPinterest,BsFacebook, BsInstagram,BsTwitter} from 'react-icons/bs'
const Footer = () => {
  return (
    <div>
      <div className=" mt-36 p-10 md:flex text-center justify-around items-center bg-teal-800">
        <div className=" mb-5">
          <h3 className=" text-gray-200 text-xl font-normal mb-3">Get Started</h3>
          <p className=" text-gray-200 md:w-[200px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            corporis mollitia iure ad, cumque praesentium .
          </p>
        </div>
        <div className=" mb-6">
          <h3 className=" text-xl text-gray-200 mb-3">Services</h3>
          <div className="">
            <p className=" text-gray-200 mb-2">Web Design</p>

            <p className=" text-gray-200 mb-2">Web Development</p>
            <p className=" text-gray-200 mb-2">Science</p>
            <p className=" text-gray-200 mb-2">Digital Marketing</p>
          </div>
        </div>
        <div className=" mb-6">
          <h3 className=" text-xl text-gray-100 mb-3">Company</h3>
          <div className="">
            <p className=" text-gray-200 mb-2">Privacy Policy</p>
            <p className=" text-gray-200 mb-2">Sitmap</p>
            <p className=" text-gray-200 mb-2">Careers</p>
            <p className=" text-gray-200 mb-2">Terms & conditions</p>
          </div>
        </div>
        <div className=" mb-5">
          <h3 className=" text-xl font-normal mb-3 text-gray-200">Follow us</h3>
          <div className="">
            <p className=" text-gray-200 font-normal mb-2">eduplatform@gmail.com</p>
            <p className=" text-gray-200 font-normal mb-3">+95 9 676 398 440</p>
            <div className=" flex justify-center gap-3 ">
              <BsFacebook  className=" text-gray-200"/>
              <BsInstagram  className=" text-gray-200"/>
              <BsTwitter  className=" text-gray-200"/>
              <BsPinterest  className=" text-gray-200"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
