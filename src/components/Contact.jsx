import React from "react";

const Contact = () => {
  return (
    <div className=" container" id="contact">
      <div className=" md:w-[500px] mx-auto mt-36">
        <h1 className=" text-center mb-4 text-black text-3xl font-bold">Subscribe Newsletter</h1>
        <p className=" text-center mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
          sapiente maiores optio nisi accusamus eos molestiae libero impedit
          voluptate asperiores!
        </p>
        <div className=" text-center">
          <input type="text" className=" md:w-[300px] bg-white text-gray-600 outline-none py-2 md:px-4" placeholder="Enter your email address" />
          <button className=" text-white bg-teal-700 py-2 px-2 ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
