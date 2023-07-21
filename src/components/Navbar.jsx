import { useScroll } from 'framer-motion';
import React, { useState } from 'react'
import {FiMenu} from 'react-icons/fi'
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className=" fixed  w-full left-0 top-0 z-20">
      {toggle && (
        <div className="">
          <div className=" bg-gray-200 h-[1000px]">
            <div className=" p-6 ">
              <IoMdClose
                size={"30px"}
                className=" flex justify-end items-end"
                onClick={() => setToggle(!true)}
              />
              <ul className=" text-center">
                <Link to={"/"}>
                  <li className=" text-2xl font-medium mb-5 hover:font-bold hover:text-teal-800 ">
                    Home
                  </li>
                </Link>
                <Link to={"/about"}>
                  <li className=" text-2xl font-medium mb-5 hover:font-bold hover:text-teal-800 ">
                    About
                  </li>
                </Link>
                <Link to={"/courses"}>
                  <li className=" text-2xl font-medium mb-5 hover:font-bold hover:text-teal-800 ">
                    Courses
                  </li>
                </Link>
                <Link to={"/teacher"}>
                  <li className=" text-2xl font-medium mb-5 hover:font-bold hover:text-teal-800 ">
                    Teacher
                  </li>
                </Link>
                <Link to={"/contact"}>
                  <li className=" text-2xl font-medium mb-5 hover:font-bold hover:text-teal-800 ">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      )}
      <div className="flex shadow-lg items-center bg-gray-200 md:justify-around justify-between p-4">
        <div className=" flex items-center gap-3">
          <FiMenu
            size={"30px"}
            className=" md:hidden"
            onClick={() => setToggle(true)}
          />
          <h1 className=" text-2xl md:text-4xl font-bold text-teal-800">
            EdU Platform
          </h1>
        </div>
        <div className="">
          <ul className=" hidden md:flex gap-8 items-center">
            <a
              href="/"
              className=" font-medium hover:text-teal-800 hover:font-bold text-lg"
            >
              Home
            </a>

            <a className=" font-medium hover:text-teal-800 hover:font-bold text-lg">
              About
            </a>

            <a className=" font-medium hover:text-teal-800 hover:font-bold text-lg">
              Courses
            </a>

            <a className=" font-medium hover:text-teal-800 hover:font-bold text-lg">
              Teacher
            </a>

            <a href='/contact' className=" font-medium hover:text-teal-800 hover:font-bold text-lg">
              Contact
            </a>
          </ul>
        </div>
        <div className="">
          <button className=" font-medium hover:text-white hover:bg-teal-700 text-base border-2 border-gray-500 py-2 px-4 rounded-lg ">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar