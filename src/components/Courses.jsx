import React from "react";
import Categories from "./Categories";
import { FiPenTool } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { BsBarChartLine } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";
import courses1 from "../assets/courses1.jpg";
import courses2 from "../assets/courses2.jpg";
import courses3 from "../assets/courses3.jpg";
import courses4 from "../assets/courses4.jpg";
import courses5 from "../assets/courses5.jpg";
import courses6 from "../assets/courses6.jpg";
import Popular from "./Popular";


const Courses = () => {

  const items = [
    {
      id: 1,
      icon: <FiPenTool />,
      category: "Design",
    },
    {
      id: 2,
      icon: <FaLaptopCode />,
      category: "Development",
    },
    {
      id: 3,
      icon: <BsBarChartLine />,
      category: "Business",
    },
    {
      id: 4,
      icon: <MdOutlineScience />,
      category: "Science",
    },
  ];
  const populars = [
    {
      id: 1,
      image: courses1,
      category: "Web Design",
      title: "The Complete Web Design Course",
      rating: 4.9,
      participants: 500,
      price: 105,
    },
    {
      id: 2,
      image: courses2,
      category: "Web Development",
      title: "FullStack Web Development Course",
      rating: 4.8,
      participants: 700,
      price: 125,
    },
    {
      id: 3,
      image: courses3,
      category: "Web Development",
      title: "Python Beginner to Advanced Course",
      rating: 4.9,
      participants: 300,
      price: 99,
    },
    {
      id: 4,
      image: courses4,
      category: "Web Design",
      title: "UI/UX Design Crazy Course With Harrys",
      rating: 4.7,
      participants: 600,
      price: 85,
    },
    {
      id: 5,
      image: courses5,
      category: "AI Development",
      title: "AI Development With Python (complete beginner course)",
      rating: 4.9,
      participants: 500,
      price: 105,
    },
    {
      id: 6,
      image: courses6,
      category: "Web Design",
      title: "The Complete Web Design Course",
      rating: 4.9,
      participants: 500,
      price: 105,
    },
  ];
  return (
    <div className=" container " id="courses">
      <div className="">
        <div className=" mt-36 text-center">
          <h1 className=" text-center text-3xl font-bold mb-4">
            Our Top <span className=" text-teal-700"> Categories</span>
          </h1>
          <p className=" text-gray-500 md:w-[700px] mx-auto mb-12  ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            ducimus impedit voluptatum quasi fugit consequuntur accusamus
            quibusdam ratione rem voluptas dolorem quia beatae, provident error
            possimus in. Optio iusto quo illum, maxime officiis asperiores aut
            impedit facilis magnam incidunt sequi.
          </p>
          <div className=" mt-12   md:flex grid grid-cols-2  justify-center text-center gap-3 w-full ">
            {items.map((item) => {
              return <Categories key={item.id} {...item} />;
            })}
          </div>
        </div>
        <div className=" ">
          <h3 className=" mt-32 text-xl font-bold mb-12 ">Most Popular Courses</h3>
          <div className=" lg:flex grid md:grid-cols-2 sm:grid-cols-1 gap-8 w-full ">
            {populars.map((course) => {
              return <Popular key={course.id} {...course} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
