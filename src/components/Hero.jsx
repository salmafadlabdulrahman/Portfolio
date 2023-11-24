import "../styles/hero.css";
import codeSnippet from "../assets/carbon (5).png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-wrapper">
        <div className="hero-body">
          <h2>Greetings, it&apos;s Salma.</h2>
          <p>
            A <span className="role">Frontend Devloper</span> who loves to see
            white pages turn out to be something great and user friendly!
          </p>
        </div>

        <div className="code-snippet-wrapper">
          <img src={codeSnippet} alt="code snippet" />
        </div>

        {/*<div className="code-board-section">
          <div className="code-intro-wrapper">
            <div className="nav-icons">
              <span className="red-circle"></span>
              <span className="yellow-circle"></span>
              <span className="green-circle"></span>
            </div>

            <div className="code-section">
              <div className="code-body">
                
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Hero;

/*<div className="code-section">
              <div className="code-body">
                class <span className="class-title">Introduction</span> &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;constructor() &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.name =
                &quot;Salma Fadl Azzam&quot;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.skills =
                [&quot;HTM&quot;, &quot;CSS&quot;, &quot;JavaScript&quot;,
                &quot;React&quot;, &quot;Git&quot;];
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.message =
                &quot;I&apos;m Salma, I&apos;m the frontend developer and
                welcome to the Good Place!! &quot;;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;
                <br />
                &#125;
              </div>
            </div> */
