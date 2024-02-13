import React from "react";

const Skills = () => {
  return (
    <div className="flex flex-col m-4 py-4 max-w-screen-2xl mx-auto">
      <div>
        <h1 className="text-5xl text-center">
          <span className="text-blue-800">TECHNICAL</span> SKILLSET
        </h1>
        <p className="text-xl text-center font-thin pt-3 mx-20">
          I have worked on variety of programming languages. For web application
          I have worked on Java, C#, Python and Javascript. When I work on
          building prototypes or personal projects I fall back on Python. Here
          are few technologies I have worked on:{" "}
        </p>
      </div>
      <div className="flex flex-wrap justify-center p-4 m-4">
        <div className="bg-img bg-cover rounded-xl m-5 flex-1 basis-2">
          <div className="mb-2">
            <img
              alt="service"
              src="https://img.icons8.com/bubbles/100/000000/services.png"
            />
          </div>
          <h2 className="text-xl px-4 text-white ">
            Programming <br></br>Languages{" "}
          </h2>

          <p className="p-4 text-white">
            Python, Java, JavaScript, <br></br>
            SQL, C#
          </p>
        </div>
        <div className="bg-img bg-cover rounded-xl m-5 flex-1">
          <div>
            <img
              alt="service"
              src="https://img.icons8.com/bubbles/100/000000/services.png"
            />
          </div>
          <h2 className="text-xl px-4 text-white">
            Web <br></br>Technologies
          </h2>

          <p className="p-4 text-white">
            ReactJS, HTML, CSS, Bootstrap,<br></br> Selenium, Jest, Postman{" "}
          </p>
        </div>
        <div className="bg-img bg-cover rounded-xl m-5 flex-1">
          <div>
            <img
              alt="service"
              src="https://img.icons8.com/bubbles/100/000000/services.png"
            />
          </div>
          <h2 className="text-xl px-4 text-white">Cloud</h2>
          <br />
          <p className="p-4 text-white">Microsoft Azure, AWS, Google Cloud</p>
        </div>
        <div className="bg-img bg-cover rounded-xl m-5  flex-1">
          <div>
            <img
              alt="service"
              src="https://img.icons8.com/bubbles/100/000000/services.png"
            />
          </div>
          <h2 className="text-xl px-4 text-white">Operating System </h2>
          <h2 className="text-xl px-4 text-white">and Database</h2>
          <p className="p-4 text-white">
            <b>OS: </b>Mac, Windows, LINUX
          </p>
          <p className="p-4 text-white">
            <b>DB: </b>MySQL, Mongo DB, Postgre SQL
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
