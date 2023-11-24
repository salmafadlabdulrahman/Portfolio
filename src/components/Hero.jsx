import "../styles/hero.css";
import codeSnippet from "../assets/code-snippet.png"

function Hero() {
  return (
    <div className="hero">
      <div className="hero-wrapper">
        <h2>Greetings, it&apos;s Salma.</h2>
        <p>
          A <span className="role">Frontend Devloper</span> who loves to see
          white pages turn out to be something great and user friendly!
        </p>

        <div className="code-board-section">
          <div className="code-intro-wrapper">
            <div className="nav-icons">
              <span className="red-circle"></span>
              <span className="yellow-circle"></span>
              <span className="green-circle"></span>
            </div>

            <div className="code-section">
              <img src={codeSnippet} alt="" />
              {/*<div className="code-body">
                class Introduction &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;constructor() &#123;
                <br />
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.name
                = &quot;Salma Fadl Azzam&quot;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.skills =
                [&quot;HTM&quot;, &quot;CSS&quot;, &quot;JavaScript&quot;, &quot;React&quot;, &quot;Git&quot;];
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.message =
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;I&apos;m
                Salma, I&apos;m the frontend developer and welcome to the Good Place!!
                &quot;;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;
                <br />
                &#125;
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

//<img src={codeSnippet} width={500} />
/*<code class="language-javascript">
      // Your code goes here
      function greet() {
        console.log("Hello, World!");
      }
    </code> */

{
  /*<span>1 let currentLocation = &quot;Egypt, Cairo&quot;</span>*/
}
{
  /*<pre>
                  const techSkills = [&quot;HTML&quot;, &quot;CSS&quot;, &quot;JavaScript&quot;, &quot;React&quot;, &quot;Git&quot;]
                  function Introduction() {
                    
                  }*/
}
