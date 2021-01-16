import React from "react";
import "../scss/hiw.scss";

const HowItWorks = () => {
  return (
    <section className="ovbg">
      <div className="container">
        <div className="row">
          <div className="mt-5 mx-auto">
            <div className="hiw-col hiw-title">
              <h2>HOW IT WORKS</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="mb-5 mx-auto">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="hiw-col center-title hiw-subtitle">
                <h5>Here's 3 Simple Steps of How it Works</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="card-deck">
          <div className="col-md-4 col-sm-12">
            <div className="card border-0 ovbg">
              <div className="remo"></div>
              <div className="card-img-top mx-auto step-1" alt="...">
                {" "}
              </div>
              <div className="card-body">
                <h5 className="card-title center-title hiw-col">
                  Sign Up
                </h5>
                <p className="card-text center-text hiw-col">
                  Aenean commodo ligula eget dolor.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="card border-0 ovbg">
              <div className="card-img-top mx-auto step-2" alt="...">
                {" "}
              </div>
              <div className="card-body">
                <h5 className="card-title center-title hiw-col">Find home</h5>
                <p className="card-text center-text hiw-col">
                  Aenean commodo ligula eget dolor.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="card border-0 ovbg">
              <div className="card-img-top mx-auto step-3" alt="...">
                {" "}
              </div>
              <div className="card-body">
                <h5 className="card-title center-title hiw-col">
                  Submit Offer
                </h5>
                <p className="card-text center-text hiw-col">
                  Aenean commodo ligula eget dolor.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;