import React from "react";
import about from '../assets/About.jpg'

const About = () => {
  return (
    <div className=" container " id="about">
      <div className=" mt-36  grid md:grid-cols-2  gap-5 ">
          <div className=" flex items-center ">
            <img
              src={about}
              alt=""
              className=" text-center w-[400px] h-auto p-3 border-4 rounded-lg border-teal-700"
            />
          </div>
        <div className="">
          <h1 className=" text-4xl font-bold mb-4">
            We provide the <br /> best
            <span className=" text-teal-700"> online courses</span>
          </h1>
          <p className=" mb-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            tempore suscipit dicta quasi aliquid ducimus assumenda placeat sit
            veniam, a, vel vitae quisquam quod. Nisi reprehenderit eos ipsam
            fuga in?
          </p>
          <button className=" border-2 border-gray-600 hover:bg-teal-700 hover:text-white font-medium text-base py-2 px-4 rounded-lg">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
