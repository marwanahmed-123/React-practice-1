import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export function Contact() {
  return (
    <div>
      <section id="contact" className="contact">
        <div className="container d-flex align-items-center flex-column">
          <h2 className="title text-uppercase m-2 fs-1 fw-bold pt-2">
            contact section
          </h2>
          <p className="title-decoration position-relative">
            <FontAwesomeIcon icon={faStar} />
          </p>
          <form className="w-75 ms-auto me-auto mt-5">
            <div className="pt-5 w-100 position-relative">
              <input
                type="text"
                className="form-control w-100 pt-2 pb-3"
                id="username"
                placeholder="userName"
              />
              <label className=" pb-3">userName:</label>
            </div>
            <div className="pt-5 w-100 position-relative">
              <input
                type="number"
                className="form-control w-100 pt-2 pb-3"
                id="age"
                aria-describedby="emailHelp"
                placeholder="userAge"
              />
              <label className=" pb-3">userAge:</label>
            </div>
            <div className="pt-5 w-100 position-relative">
              <input
                type="email"
                className="form-control w-100 pt-2 pb-3"
                id="email"
                aria-describedby="emailHelp"
                placeholder="userEmail"
              />
              <label className=""> userEmail:</label>
            </div>
            <div className="pt-5 w-100 position-relative">
              <input
                type="password"
                className="form-control w-100 pt-2 pb-3"
                id="password"
                placeholder="userPassword"
              />
              <label className=" pb-3 floating-label">userPassword:</label>
            </div>
            <button type="submit" className="btn btn-primary mt-4">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
