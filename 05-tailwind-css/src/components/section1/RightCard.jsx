import React from "react";

const RightCard = ({ imgSrc, name = "Satisfied" }) => {
  return (
    <div
      className={`h-full relative  overflow-hidden   w-3/8 rounded-4xl px-7 flex flex-col justify-between`}
    >
      <img
        src={imgSrc}
        className="w-full h-full absolute inset-0 -z-10 object-cover opacity-60"
        alt=""
      />
      <div className="mt-10 bg-amber-400 w-1 h-1 p-5 flex justify-center items-center rounded-full">
        1
      </div>
      <div className="mb-6">
        <p className="mb-10 text-sm ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia neque
          voluptate iste quasi ducimus ali
        </p>
        <p className="bg-blue-500 w-fit px-5 py-2 rounded-full text-white cursor-pointer">
          {name}
        </p>
      </div>
    </div>
  );
};

export default RightCard;
