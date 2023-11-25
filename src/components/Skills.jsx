import "../styles/skills.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faSquareJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faObjectGroup } from '@fortawesome/free-solid-svg-icons';

function Skills() {
  const style = {
    fontSize: "2.5em",

  }

  return (
    <div className="skills">
      <div className="skills-container">
        <div className="skills-wrapper">
          <h1>
            Techs <span>&</span> Skills
          </h1>
          <ul className="tech-skills">
            <li>HTML <FontAwesomeIcon icon={faHtml5} style={style}/></li>
            <li>CSS <FontAwesomeIcon icon={faCss3Alt} style={style}/></li>
            <li>JavaScript <FontAwesomeIcon icon={faSquareJs} style={style}/></li>
            <li>REACT <FontAwesomeIcon icon={faReact} style={style}/></li>
            <li>Responsive Design <FontAwesomeIcon icon={faObjectGroup} style={style} /></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;