import "../styles/hero.css";
import codeSnippet from "../assets/home/Intro-snippet.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-wrapper">
        <div className="hero-body">
          <h2>Greetings, it&apos;s Salma.</h2>
          <p>
            A <span className="role">Frontend Devloper</span> who loves to see
            white pages turn into something great and user friendly!
          </p>
        </div>

        <div className="code-snippet-wrapper">
          <img src={codeSnippet} alt="code snippet" />
        </div>
      </div>
    </div>
  );
}

export default Hero;

