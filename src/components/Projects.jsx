import "../styles/projects.css";

import ecommerceWebsite from "../assets/projectsImages/Audiophile-Pic.webp";
import archStudioPic from "../assets/projectsImages/audioStudioPic.webp";
import taskManagementApp from "../assets/projectsImages/taskManagement.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

//import { useRef } from "react";

function Projects() {
  //const projectsRef = useRef(null);

  const style = {
    fontSize: "1.5em",
  };

  return (
    <div className="projects">
      <main>
        <span className="projects-line"></span>
        <div className="projects-wrapper">
          <h2>Projects</h2>
          <p className="description">
            Take a look at some of the projects <br />
            that i&apos;ve done!
          </p>
          <div className="projects-container">
            <div className="project-container">
              <div className="project-img-container" style={{ order: "1" }}>
                <img src={ecommerceWebsite} />
              </div>

              <div className="project-info" style={{ order: "2" }}>
                <h4 className="project-category">E-Commerce Website</h4>
                <h3 className="project-title">Audiophile E-Commerce Website</h3>
                <p className="techs-used">
                  Built with:{" "}
                  <span>
                    <FontAwesomeIcon icon={faHtml5} style={style} />
                  </span>{" "}
                  <span>
                    <FontAwesomeIcon icon={faCss3Alt} style={style} />
                  </span>{" "}
                  <span>
                    <FontAwesomeIcon icon={faSquareJs} style={style} />
                  </span>{" "}
                  <span>
                    <FontAwesomeIcon icon={faReact} style={style} />
                  </span>
                </p>
                <div className="links">
                  <a
                    href="https://github.com/salmafadlabdulrahman/Audiophile-ecommerce-website"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View the code{" "}
                    <span className="right-icon">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </a>
                  <a
                    href="https://audiophile-ecommerce-website-ebon.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit the app{" "}
                    <span className="right-icon">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="project-container">
              <div className="project-img-container" style={{ order: "2" }}>
                <img src={taskManagementApp} />
              </div>

              <div className="project-info" style={{ order: "1" }}>
                <h4 className="project-category">Utilities</h4>
                <h3 className="project-title">Task Management App</h3>
                <p className="techs-used">
                  Built with:{" "}
                  <span>
                    <FontAwesomeIcon icon={faHtml5} style={style} />
                  </span>{" "}
                  <span>
                    <FontAwesomeIcon icon={faCss3Alt} style={style} />
                  </span>{" "}
                  <span>
                    <FontAwesomeIcon icon={faSquareJs} style={style} />
                  </span>{" "}
                  <span>
                    <FontAwesomeIcon icon={faReact} style={style} />
                  </span>
                </p>
                <div className="links">
                  <a
                    href="https://github.com/salmafadlabdulrahman/task-management-app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View the code{" "}
                    <span className="right-icon">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </a>
                  <a
                    href="https://task-management-app-nsaw.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit the app{" "}
                    <span className="right-icon">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="project-container">
              <div className="project-img-container">
                <img src={archStudioPic} />
              </div>

              <div className="project-info">
                <h4 className="project-category">Business/Company Website </h4>
                <h3 className="project-title">Arch Studio Website</h3>
                <p className="techs-used">
                  Built with:{" "}
                  <span>
                    <FontAwesomeIcon icon={faHtml5} style={style} />
                  </span>{" "}
                  <span>
                    <FontAwesomeIcon icon={faCss3Alt} style={style} />
                  </span>{" "}
                  <span>
                    <FontAwesomeIcon icon={faSquareJs} style={style} />
                  </span>{" "}
                  <span>
                    <FontAwesomeIcon icon={faReact} style={style} />
                  </span>
                </p>
                <div className="links">
                  <a
                    href="https://github.com/salmafadlabdulrahman/Arch-Studio-website"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View the code{" "}
                    <span className="right-icon">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </a>
                  <a
                    href="https://arch-studio-website-ruby.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit the app{" "}
                    <span className="right-icon">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Projects;

/*<p className="techs-used">
                Built with: <span>HTML</span> <span>CSS</span> <span>JS</span>{" "}
                <span>React</span>
              </p> */

/*style={{alignSelf: "flex-end"}} */
