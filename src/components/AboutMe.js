import React from "react";

const AboutMe = () => {
  return (
    <div>
      <div className="mx-5 py-5">
        <h1 className="text-5xl text-center pt-3">
          <span className="text-blue-800 ">ABOUT</span> ME
        </h1>
        <h2 className="text-2xl text-center py-1">
          A Full Stack Developer, Web Developer and Programmer
        </h2>
        <p className="text-xl text-justify font-thin pt-3 mx-20">
          Hello, My Name is <b>Maitreyee Damale</b>. I recently graduated with a
          <b>
            {" "}
            Masters degree in Computer Science from University of Texas at
            Arlington
          </b>
          . During my academic journey, I was involved in variety of projects,
          where I leveraged technologies like{" "}
          <b>Java, Python, Javascript, ReactJS, Flask, Django, React Native</b>.
          I worked as a software developer at <b>TMF Group</b> where I worked on
          design, development, testing of REST API for their payroll management
          system. At TMF I leveraged technologies like{" "}
          <b>
            Java, Springboot, ReactJS, Redux, Azure Cloud Services, PowerBI,
            Microsoft CRM
          </b>
          . I am enthusiastic and always open to learn. I have a good problem
          solving skills and proficient in <b>Python, Java, Javascript, SQL</b>.
          Currently seeking a challenging assignment which will provide avenues
          for professional learning, hone my technical skills and enrich my
          experience as well as knowledge in the process.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
