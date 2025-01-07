import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export function About() {
  return (
    <div>
      <section id="about" className="about">
        <div className="container d-flex align-items-center justify-content-center flex-column">
          <h2 className="title text-uppercase m-2 text-white fs-1 fw-bold">
            about component
          </h2>
          <p className="title-decoration text-white position-relative">
            <FontAwesomeIcon icon={faStar} />
          </p>
          <div className="row m-1 text-white">
            <p className="col-md-6">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
            <p className="col-md-6">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
