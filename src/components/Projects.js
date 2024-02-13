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
        <div className="bg-slate-500 bg-cover rounded-xl flex flex-wrap items-center justify-center flex-row h-96">
          <div className="flex flex-wrap items-center justify-center basis-1/2 h-full">
            <h1 className="text-white text-3xl">Youtube Clone</h1>
            <br />
            <p className="text-white text-xl font-light p-2 text-center">
              {" "}
              Developed a Youtube Clone application using React, Redux, and Git
              for collaboration; integrated frontend (React.js, TailwindCSS).
              Implemented Search Suggestion using Youtube Search API.
              <br />
              <b>Tools used:</b> ReactJS, Redux, TailwindCSS
            </p>
            <a
              href="https://damalemaitreyee.github.io/youtube-clone/"
              className="text-white "
            >
              See Project
            </a>
          </div>
          <div className="bg-slate-700 bg-cover rounded-xl basis-1/2 scale-100 h-full hover:scale-110">
            <img
              className="h-full w-full rounded-lg"
              src={youtube}
              alt="youtube"
            />
          </div>
        </div>
        <div className="bg-img bg-cover rounded-xl flex flex-wrap items-center justify-center flex-row h-96">
          <div className="bg-img bg-cover rounded-xl basis-1/2 scale-100 h-full hover:scale-110">
            <img
              className="h-full w-full rounded-lg"
              src={foodorder}
              alt="Food Ordering"
            />
          </div>
          <div className="flex flex-wrap items-center justify-center basis-1/2  h-full">
            <h1 className="text-white text-3xl">Food Ordering App</h1>
            <br />
            <p className="text-white text-xl font-light p-2 text-center">
              {" "}
              Developed a robust food delivery application using React, Redux,
              and Git for collaboration; integrated frontend (React.js, Tailwind
              CSS).
              <br />
              <b>Tools used:</b> ReactJS, Redux, TailwindCSS
            </p>
            <a
              href="https://github.com/damalemaitreyee/react-app"
              className="text-white "
            >
              See Project
            </a>
          </div>
        </div>
        <div className="bg-slate-500 bg-cover rounded-xl flex flex-wrap items-center justify-center flex-row h-96">
          <div className="flex flex-wrap items-center justify-center basis-1/2 h-full">
            <h1 className="text-white text-3xl">Netflix Clone</h1>
            <br />
            <p className="text-white text-xl font-light p-2 text-center">
              {" "}
              Developed a Netflix Clone application using React JS, Redux, and
              Git for collaboration; integrated frontend (React.js, CSS).
              <br />
              <b>Tools used:</b> ReactJS, Redux, CSS
            </p>
            <a
              href="https://damalemaitreyee.github.io/netflix-clone/"
              className="text-white "
            >
              See Project
            </a>
          </div>
          <div className="bg-img bg-cover rounded-xl basis-1/2 scale-100 h-full hover:scale-110">
            <img
              className="h-full w-full rounded-lg"
              src={netflix}
              alt="netflix"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
