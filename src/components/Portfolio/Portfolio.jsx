import "./portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export function Portfolio() {
  return (
    <div>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className=" d-flex align-items-center flex-column">
            <h2 className="title text-uppercase m-2 fs-1 fw-bold pt-2">
              portfolio component
            </h2>
            <p className="title-decoration position-relative">
              <FontAwesomeIcon icon={faStar} />
            </p>
          </div>
          <div className="row">
            <div className="col-md-4 p-4">
              <div>
                <img
                  src="/React-practice-1/poert1.png"
                  alt="house"
                  className="w-100"
                />
                <div className="icon">
                  <FontAwesomeIcon icon={faPlus} />
                </div>
              </div>
            </div>
            <div className="col-md-4  p-4">
              <div>
                <img
                  src="/React-practice-1/port2.png"
                  alt="house"
                  className="w-100"
                />
                <div className="icon">
                  <FontAwesomeIcon icon={faPlus} />
                </div>
              </div>
            </div>
            <div className="col-md-4  p-4">
              <div>
                <img
                  src="/React-practice-1/port3.png"
                  alt="house"
                  className="w-100"
                />
                <div className="icon">
                  <FontAwesomeIcon icon={faPlus} />
                </div>
              </div>
            </div>
            <div className="col-md-4  p-4">
              <div>
                <img
                  src="/React-practice-1/poert1.png"
                  alt="house"
                  className="w-100"
                />
                <div className="icon">
                  <FontAwesomeIcon icon={faPlus} />
                </div>
              </div>
            </div>
            <div className="col-md-4 p-4">
              <div>
                <img
                  src="/React-practice-1/port2.png"
                  alt="house"
                  className="w-100"
                />
                <div className="icon">
                  <FontAwesomeIcon icon={faPlus} />
                </div>
              </div>
            </div>
            <div className="col-md-4 p-4">
              <div>
                <img
                  src="/React-practice-1/port3.png"
                  alt="house"
                  className="w-100"
                />
                <div className="icon">
                  <FontAwesomeIcon icon={faPlus} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
