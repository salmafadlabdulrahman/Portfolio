import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "../styles/contact.css";

function Contact() {
  const emailAddress = "salmafadlazzam@gmail.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const style = {
    fontSize: "2em",
  };
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-wrapper">
          <h2>Contact Me</h2>
          <span className="contact-line"></span>

          <p>
            Interested in working together ?<br /> feel free to reach out ✨{" "}
          </p>

          <div className="social-media">
            <ul>
              <li>
                <a
                  href="https://github.com/salmafadlabdulrahman"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} style={style} />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/salma-azzam-0bb68b19b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} style={style} />
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/salmafadl_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} style={style} />
                </a>
              </li>

              <li>
                <a href="#" onClick={handleEmailClick}>
                  <FontAwesomeIcon icon={faPaperPlane} style={style} />
                </a>
              </li>
            </ul>
          </div>
          <h5>Made by Salma Azzam © 2023 </h5>
        </div>
      </div>
    </div>
  );
}

export default Contact;
