import { Home } from "./components/Home/Home.jsx";
import { About } from "./components/About/About.jsx";
import { Contact } from "./components/Contact/Contact.jsx";
import { Portfolio } from "./components/Portfolio/Portfolio.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import {
  NavLink,
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg sticky-top w-100 pb-4 pt-4">
        <div className="container">
          <Link className="navbar-brand fs-2 fw-bold text-white" to="/">
            START FRAMEWORK
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white fw-bold fs-6 text-uppercase m-2 p-2"
                  to="/About"
                  activeClassName="active"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white fw-bold fs-6 text-uppercase m-2 p-2"
                  to="/Portfolio"
                  activeClassName="active"
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white fw-bold fs-6 text-uppercase m-2 p-2"
                  to="/Contact"
                  activeClassName="active"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Portfolio" element={<Portfolio />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
      <section className="info">
        <div className="container-fluid">
          <div className="row text-white">
            <div className="col-md-4">
              <h4 className="text-center">LOCATION</h4>
              <p className="text-center">2215 John Daniel Drive</p>
              <p className="text-center">Clark, MO 65243</p>
            </div>
            <div className="col-md-4 text-center">
              <h4 className="text-center">AROUND THE WEB</h4>
              <div className="icons d-flex justify-content-center">
                <div className="icon">
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faLinkedin} />
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faGlobe} />
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <h4 className="text-center">ABOUT FREELANCER</h4>
              <p className="text-center">
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container text-center text-white pt-4 pb-4">
          Copyright © Your Website 2021
        </div>
      </footer>
    </Router>
  );
}

export default App;
