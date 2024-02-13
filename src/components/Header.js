import React from "react";

const Header = () => {
  return (
    <div className="bg-black py-2">
      <div className="flex justify-around flex-wrap">
        <div>
          <h1 className="text-3xl pl-5">
            {" "}
            <span className="text-blue-900 font-bold">MD</span>
            <span className="text-white">[CODES]</span>
          </h1>
        </div>
        {/* <div>
          <ul className="flex space-x-20 px-5 flex-wrap">
            <li className="text-white text-2xl">Home</li>
            <li className="text-white text-2xl">About</li>
            <li className="text-white text-2xl">Skills</li>
            <li className="text-white text-2xl">Projects</li>
            <li className="text-white text-2xl">Contact</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
