import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-wrap flex-col justify-center m-5">
      <div className="m-10">
        <h1 className="text-5xl text-center">
          <span className="text-blue-800">CONTACT</span> INFO
        </h1>
      </div>
      <div className="flex flex-row flex-wrap justify-evenly">
        <div className="flex flex-row">
          <div>
            <img src="https://img.icons8.com/bubbles/100/000000/phone.png" />
          </div>
          <div>
            <h1>Phone</h1>
            <h2>+1 682-521-9368</h2>
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <img src="https://img.icons8.com/bubbles/100/000000/new-post.png" />
          </div>
          <div>
            <h1>Email</h1>
            <h2>maitreyee8818@gmail.com</h2>
            <h2>mxd8520@mavs.edu</h2>
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" />
          </div>
          <div>
            <h1>Address</h1>
            <h2>Fremont, CA, USA</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
