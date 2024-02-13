import React from "react";
import youtube from "../images/youtube.png";
import netflix from "../images/netflix.png";
import foodorder from "../images/foodorder.png";

const Projects = () => {
  return (
    <div className="flex flex-wrap items-center justify-center max-w-7xl mx-auto">
      <div className="m-5">
        <h1 className="text-5xl text-center">
          <span className="text-blue-800">RECENT</span> PROJECTS
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-center mt-10">
        <div className=" bg-img bg-cover rounded-xl flex flex-wrap items-center justify-center flex-row h-96">
          <div className="flex flex-wrap items-center justify-center basis-1/2 h-full">
            <h1 className="text-white text-3xl">Youtube Clone</h1>
            <br />
            <p className="text-white text-lg font-light p-2">
              {" "}
              Developed a robust food delivery application using MERN stack,
              Redux, and Git for collaboration; integrated frontend (React.js,
              Material UI) with backend (Node.js, Express.js, MongoDB) for
              authentication, orders, and restaurants, enriched with Google APIs
              for location-based search and a distinctive multi-restaurant
              purchase feature.
              <br />
              <b>Tools used:</b> ReactJS, Redux, TailwindCSS
            </p>
            <a href="https://github.com/hardiknahata/CS5610-DoorDelights-Frontend">
              See Project
            </a>
          </div>
          <div className="bg-img bg-cover rounded-xl basis-1/2 scale-100 h-full hover:scale-110">
            <img
              className="h-full w-full rounded-lg"
              src={youtube}
              alt="youtube"
            />
          </div>
        </div>
        <div className="bg-img bg-cover rounded-xl flex flex-wrap items-center justify-center flex-row h-96">
          <div className="bg-img bg-cover rounded-xl basis-1/2 scale-100 h-full hover:scale-110">
            <img className="h-full w-full rounded-lg" src={foodorder} />
          </div>
          <div className="flex flex-wrap items-center justify-center basis-1/2  h-full">
            <h1 className="text-white text-3xl">Food Ordering App</h1>
            <br />
            <p className="text-white text-lg font-light p-2">
              {" "}
              Developed a robust food delivery application using MERN stack,
              Redux, and Git for collaboration; integrated frontend (React.js,
              Material UI) with backend (Node.js, Express.js, MongoDB) for
              authentication, orders, and restaurants, enriched with Google APIs
              for location-based search and a distinctive multi-restaurant
              purchase feature.
              <br />
              <b>Tools used:</b> ReactJS, Redux, TailwindCSS
            </p>
            <a href="https://github.com/hardiknahata/CS5610-DoorDelights-Frontend">
              See Project
            </a>
          </div>
        </div>
        <div className="bg-img bg-cover rounded-xl flex flex-wrap items-center justify-center flex-row h-96">
          <div className="flex flex-wrap items-center justify-center basis-1/2 h-full">
            <h1 className="text-white text-3xl">Netflix Clone</h1>
            <br />
            <p className="text-white text-lg font-light p-2">
              {" "}
              Developed a robust food delivery application using MERN stack,
              Redux, and Git for collaboration; integrated frontend (React.js,
              Material UI) with backend (Node.js, Express.js, MongoDB) for
              authentication, orders, and restaurants, enriched with Google APIs
              for location-based search and a distinctive multi-restaurant
              purchase feature.
              <br />
              <b>Tools used:</b> ReactJS, Redux, TailwindCSS
            </p>
            <a href="https://github.com/hardiknahata/CS5610-DoorDelights-Frontend">
              See Project
            </a>
          </div>
          <div className="bg-img bg-cover rounded-xl basis-1/2 scale-100 h-full hover:scale-110">
            <img className="h-full w-full rounded-lg" src={netflix} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
