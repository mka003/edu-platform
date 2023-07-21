import React from 'react'


const Categories = ({category, icon}) => {
  console.log(category);
  return (
    <div className=''>
      <div className=" hover:bg-gray-300 flex justify-center flex-col  text-center p-5 rounded-lg  bg-white w-[200px]">
        <div className=" ms-[70px] text-gray-800 text-2xl mb-3 text-center">{icon}</div>
        <div className="text-xl mb-2 text-gray-700">{category}</div>
        <p className=' text-base text-gray-500'>View More</p>
      </div>
    </div>
  );
}

export default Categories