import "../styles/hero.css";
import codeSnippet from "../assets/17008411212358274.png";
//carbon (5).png
//carbon__5_-removebg-preview.png
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

