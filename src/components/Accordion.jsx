import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ id, title }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (id) => {
    setActiveIndex(id === activeIndex ? null : id);
  };
  return (
    <div className=" mt-5">
      <div className=" md:w-[700px] mx-auto">
        <div className=" flex justify-between items-center">
          <h3 className=" text-lg text-gray-700 font-semibold">{title}</h3>
          <BiChevronDown
            onClick={() => handleClick(id)}
            size={"25px"}
            className={`${id === activeIndex ? "rotate-180" : "rotate-0"} cursor-pointer transition-all duration-300`}
          />
        </div>
        <AnimatePresence>
          {id === activeIndex && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.4 }}
              style={{ overflow: "hidden"}}
              className="pt-4">
              <p className=" text-sm leading-7 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                incidunt non tenetur quae exercitationem laudantium nesciunt
                repellendus facere maiores, culpa voluptates eos esse, quas
                sequi debitis labore omnis sit accusamus!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Accordion;
