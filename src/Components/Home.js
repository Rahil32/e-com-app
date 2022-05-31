import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero bg-dark">
      <div className="card bg-dark text-white border-0">
        <img
          src="/assets/puff.jpg"
          className="card-img"
          alt="Background"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <h5 className="card-title display-2 fw-bold mb-0 text-start">
            Trend Setter
          </h5>
          <p className="card-text lead fs-2 text-start ">
            Your own style is the trend
          </p>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
