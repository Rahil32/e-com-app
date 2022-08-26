import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-dark fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              This is the place you can explore and discover your own unique color and style at the confort of your home.
            </p>
            <NavLink to="/contact" className="btn btn-outline-dark px-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/about_us2.jpg"
              alt="About"
              height="400px"
              width="600px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
