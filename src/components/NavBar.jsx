import { Link as ScrollLink } from "react-scroll";

import "../styles/navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <nav>
          <span className="logo">Sa</span>
          <ul>
            <ScrollLink
              to="projects-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              <li>Projects</li>
            </ScrollLink>

            <ScrollLink
              to="contact-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              <li>Contact</li>
            </ScrollLink>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
