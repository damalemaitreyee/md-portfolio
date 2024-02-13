import React from "react";
import portfolio from "../images/portfolio.jpg";

const Name = () => {
  return (
    <div className=" flex flex-wrap justify-around bg-hero bg-contain relative bg-center bg-top py-10 pt-20">
      <div>
        <h1 className="text-white text-5xl font-semibold">Hello,</h1>
        <h1 className="text-white text-6xl font-semibold">
          My Name is
        </h1>
        <h1 className="text-blue-300 text-7xl font-semibold">
          Maitreyee Damale
        </h1>
      </div>
      <div>
        <div>
          <img
            alt="Maitreyee"
            src={portfolio}
            className="object-cover w-96 h-96 border-double border-4 border-cyan-400 border-spacing-5"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Name;
