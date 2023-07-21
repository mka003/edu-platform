import React from "react";
import  hero  from '../assets/hero.png'
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";

const Hero = () => {
  return (
    <div className=" container" id="home">
      <div className=" grid md:grid-cols-2 place-items-center mt-12">
        <div className=" ">
          <p className=" text-teal-700 text-lg mb-3">your e-learning partner</p>
          <h1 className=" text-6xl text-black font-bold mb-3">
            This is <br /> the new way <br /> to learn online
          </h1>
          <p className=" mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            laudantium optio nam eligendi dolore consequuntur ipsum. Corporis
            delectus iure expedita.
          </p>
          <div className=" gap-3">
            <button className=" text-white bg-teal-700 py-2 px-3 rounded-lg mr-5">
              Get Started
            </button>
            <button className=" border-2 hover:bg-teal-700 hover:text-white  border-gray-500 py-2 px-5 rounded-lg">
              Discover
            </button>
          </div>
        </div>
        <img src={hero} alt="" className=" w-auto h-[500px]" />
      </div>
      <div className=" flex flex-col justify-center items-center pt-12 gap-5">
        <p className=" text-lg">
          We collaborate with
          <span className=" text-teal-700 "> 100 + leading universities on companies</span>
        </p>
        <div className=" grid grid-cols-2 md:flex items-center gap-8">
          <img src={logo1} alt="" className=" w-auto h-12" />
          <img src={logo2} alt="" className=" w-auto h-12" />
          <img src={logo3} alt="" className=" w-auto h-12" />
          <img src={logo4} alt="" className=" w-auto h-12" />
          <img src={logo5} alt="" className=" w-auto h-12" />
          <img src={logo6} alt="" className=" w-auto h-12" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
