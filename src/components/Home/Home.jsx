import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export function Home() {
  return (
    <div>
      <section id="home" className="home">
        <div className="container d-flex align-items-center justify-content-center flex-column">
          <img
            className="smile m-4"
            src="/React-practice-1/avataaars.svg"
            alt="smile guy"
          />
          <h2 className="title text-uppercase m-2 text-white fs-1 fw-bold">
            start Framework
          </h2>
          <p className="title-decoration text-white position-relative">
            <FontAwesomeIcon icon={faStar} />
          </p>
          <p className="m-1 text-white">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </section>
    </div>
  );
}
