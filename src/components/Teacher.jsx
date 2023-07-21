import React from "react";
import  teacher1  from '../assets/teacher1.png'
import teacher2 from "../assets/teacher2.png";
import Accordion from "./Accordion";

const Teacher = () => {
    const accordions = [
      {
        id: 1,
        title: "What is Skillex?",
      },
      {
        id: 2,
        title: "What can I learn from Skillex?",
      },
      {
        id: 3,
        title: "Can I teach on Skillex?",
      },
      {
        id: 4,
        title: "What is included in my Skillex membership?",
      },
    ];
  return (
    <div className=" container" id="teacher">
      <div className=" place-items-center grid md:grid-cols-2 mt-36">
        <img src={teacher1} alt="" className=" w-[300px] h-[300px] mb-3 " />
        <div className="">
          <h2 className=" text-3xl font-bold mb-3">
            Become <span className=" text-teal-700">An Instructor</span> <br />{" "}
            of Our Platform
          </h2>
          <p className=" text-lg mb-5 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora id
            maiores architecto cumque, maxime ea dolores dolorum doloremque rem
            impedit cupiditate est consectetur vel illo nisi pariatur, quidem
            fugit accusantium.
          </p>
          <button className=" bg-teal-700 text-white py-2 px-4 rounded-lg">
            Start teaching
          </button>
        </div>
      </div>

      <div className=" place-items-center grid md:grid-cols-2 mt-12">
        <div className=" mb-3">
          <h2 className=" text-3xl font-bold mb-3">
            Become <span className=" text-teal-700">An Instructor</span> <br />{" "}
            of Our Platform
          </h2>
          <p className=" text-lg mb-5 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora id
            maiores architecto cumque, maxime ea dolores dolorum doloremque rem
            impedit cupiditate est consectetur vel illo nisi pariatur, quidem
            fugit accusantium.
          </p>
          <button className=" bg-teal-700 text-white py-2 px-4 rounded-lg">
            Start teaching
          </button>
        </div>
        <img src={teacher2} alt="" className=" w-[300px] h-[300px] " />
      </div>
      <div className=" mt-20">
        <h2 className=" text-2xl font-bold text-center">
          Frequently <span>Asked Questions</span>
        </h2>
        <div className="mt-12">
          {accordions.map((accordion) => {
            return <Accordion key={accordion.id} {...accordion} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Teacher;
